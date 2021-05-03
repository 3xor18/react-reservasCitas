import React from 'react';
import PropTypes from 'prop-types';

export const Citas = ({
	cita: {
		id,
		mascota,
		propietario,
		fecha,
		hora,
		sintomas,
	},
	eliminarCita,
}) => {
	return (
		<div className="cita">
			<p>
				Mascota:
				<span>{mascota}</span>
			</p>
			<p>
				Dueño:
				<span>{propietario}</span>
			</p>
			<p>
				Fecha:
				<span>{fecha}</span>
			</p>
			<p>
				Hora:
				<span>{hora}</span>
			</p>
			<p>
				Sintoma:
				<span>{sintomas}</span>
			</p>
			<button
				className="button eliminar u-full-width"
				onClick={() => eliminarCita(id)}
			>
				Eliminar
			</button>
		</div>
	);
};

Citas.propTypes = {
	eliminarCita: PropTypes.func.isRequired,
	cita: PropTypes.object.isRequired,
};
