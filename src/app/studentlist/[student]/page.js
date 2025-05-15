export default async function Student({ params }) {
    const { student } = await params;

    return (
        <div>
            <h1>Student Details</h1>
            <h3>Name: {student}</h3>
        </div>
    );
}
