import Student from "./components/Students/students";
import StudentReview from "./components/Students/StudentReview";

function MainBody() {
	const whatWeWillLearn = "ReactJs";
	const lectureCount = 3;
	return (
		<div style={{ minHeight: "70vh" }}>
			<p>
				to jest kurs {whatWeWillLearn} przez tworzenie projektów
				<br />
				Wszystkich materiałów - {lectureCount}
			</p>
			<ul>
				<li>pierwsza opcja</li>
				<li>druga opcja</li>
			</ul>
			<div className='container row'>Students Enrolled</div>
			<Student
				experience={2}
				name='Pawel Norris'
				headshot={`https://api.lorem.space/image/face?w=150&h=150`}
			>
				<StudentReview />
			</Student>
			<Student
				experience={4}
				name='Jan Jordan'
				headshot={`https://api.lorem.space/image/face?w=150&h=151`}
			>
				<StudentReview />
			</Student>
			<Student
				experience={5}
				data={5}
				name='Anna Maria'
				headshot={`https://api.lorem.space/image/face?w=150&h=152`}
			>
				<StudentReview />
			</Student>
		</div>
	);
}

export default MainBody;
