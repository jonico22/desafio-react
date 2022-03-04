import { useFormik } from 'formik';
import * as Yup from 'yup';
const Form = ({ saveData }) => {
    const formik = useFormik({
        initialValues: {
            nro: '',
            celular: '',
            placa: '',
            accept: true
        },
        validationSchema: Yup.object({
            nro: Yup.string()
                .required('El campo es obligatorio'),
            celular: Yup.string()
                .required('El campo es obligatorio'),
            placa: Yup.string()
                .required('El campo es obligatorio'),
        }),
        onSubmit: (valores) => {
            saveData(valores)
        },
    });
    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <div className='form-select'>
                    <select name="dni" id="dni">
                        <option value="0">DNI</option>
                    </select>
                    <div>
                        <input className="w-full"
                            type="text"
                            id="nro"
                            placeholder="Nro. de doc"
                            value={formik.values.nro}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.nro && formik.errors.nro ? (
                            <p>{formik.errors.nro} </p>
                        ) : null}
                    </div>
                </div>

                <input className="w-full"
                    type="text"
                    id="celular"
                    placeholder="Celular"
                    value={formik.values.celular}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.celular && formik.errors.celular ? (
                    <p>{formik.errors.celular} </p>
                ) : null}
                <input className="w-full"
                    type="text"
                    id="placa"
                    placeholder="Placa"
                    value={formik.values.placa}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.placa && formik.errors.placa ? (
                    <p>{formik.errors.placa} </p>
                ) : null}
                <ul>
                    <li> <input type="checkbox" value={formik.values.accept}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur} name="accept" checked /></li>
                    <li>
                        Acepto la <a href="#">Política de Protecciòn de Datos <br />
                            Personales</a>  y los <a href="#">Términos y Condiciones.</a>
                    </li>

                </ul>

                <button
                    type="submit"
                    className="">
                    COTIZALO
                </button>

            </form>
        </>
    )
}

export default Form