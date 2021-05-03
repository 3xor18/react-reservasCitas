import React, { Fragment, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

export const Formulario = ({ crearCita }) => {
	const initialState = {
		mascota: '',
		propietario: '',
		fecha: '',
		hora: '',
		sintomas: '',
	};

	const [cita, setCita] = useState(initialState);

	const [error, setError] = useState(false);

	const handleChange = ({
		target: { name, value },
	}) => {
		setCita({ ...cita, [name]: value });
	};

	const {
		mascota,
		propietario,
		fecha,
		hora,
		sintomas,
	} = cita;

	const hadleSubmit = (e) => {
		e.preventDefault();

		if (
			isEmpty(mascota) ||
			isEmpty(propietario) ||
			isEmpty(fecha) ||
			isEmpty(hora) ||
			isEmpty(sintomas)
		) {
			setError(true);
			return;
		} else {
			setError(false);
			cita.id = uuidv4();
			crearCita(cita);
			setCita(initialState);
		}
	};

	const isEmpty = (value) => {
		if (value.trim() === '') return true;
		return false;
	};

	return (
		<Fragment>
			<h2>Crear Cita</h2>
			{error && (
				<p className="alerta-error">
					Formulario invalido
				</p>
			)}
			<form onSubmit={hadleSubmit}>
				<label>Nombre de Mascota</label>
				<input
					type="text"
					name="mascota"
					className="u-full-width"
					placeholder="Nombre Mascota"
					onChange={handleChange}
					value={mascota}
				/>

				<label>Nombre del dueño</label>
				<input
					type="text"
					name="propietario"
					className="u-full-width"
					placeholder="Nombre del Dueño"
					onChange={handleChange}
					value={propietario}
				/>

				<label>Fecha</label>
				<input
					type="date"
					name="fecha"
					className="u-full-width"
					onChange={handleChange}
					value={fecha}
				/>

				<label>Hora</label>
				<input
					type="time"
					name="hora"
					className="u-full-width"
					onChange={handleChange}
					value={hora}
				/>

				<label>Sintomas</label>
				<textarea
					className="u-full-width"
					name="sintomas"
					onChange={handleChange}
					value={sintomas}
				></textarea>

				<button
					type="submit"
					className="u-full-width button-primary"
				>
					Agregar cita
				</button>
			</form>
		</Fragment>
	);
};

Formulario.propTypes = {
	crearCita: PropTypes.func.isRequired,
};
