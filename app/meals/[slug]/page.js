export default async function MealDetailsPage({ params }) {
    const { slug } = await params
    return (
        <div>
            <h1>Meals Details</h1>
            <p>{slug}</p>
        </div>
    )
}