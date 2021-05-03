import {
	Fragment,
	useEffect,
	useState,
} from 'react';
import { Citas } from './components/Citas';
import { Formulario } from './components/Formulario';

function App() {
	let citasIniciales = JSON.parse(
		localStorage.getItem('citas')
	);
	if (!citasIniciales) {
		citasIniciales = [];
	}

	const [citas, setCitas] = useState(
		citasIniciales
	);

	const crearCita = (cita) => {
		setCitas([...citas, cita]);
	};

	const eliminarCita = (id) => {
		const citasFiltradas = citas.filter(
			(cita) => cita.id !== id
		);
		setCitas(citasFiltradas);
	};

	useEffect(() => {
		if (citasIniciales) {
			localStorage.setItem(
				'citas',
				JSON.stringify(citas)
			);
		} else {
			localStorage.setItem(
				'citas',
				JSON.stringify([])
			);
		}
	}, [citas]);

	return (
		<Fragment>
			<h1>Administrador de pascientes</h1>
			<div className="container">
				<div className="one-half column">
					<Formulario crearCita={crearCita} />
				</div>
				{citas.length > 0 ? (
					<div className="one-half column">
						<h2>Adminitra tus citas</h2>
						{citas.map((cita) => (
							<Citas
								key={cita.id}
								cita={cita}
								eliminarCita={eliminarCita}
							/>
						))}
					</div>
				) : (
					<h2>No existen citas!</h2>
				)}
			</div>
		</Fragment>
	);
}

export default App;
