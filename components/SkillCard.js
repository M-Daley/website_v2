export default function SkillCard({ title, list }) {
return (
    <div className="card col-3 h-12">
        <h2>{title}</h2>
        <hr />
        <ul>
            {list.map((item, i) => (
                <li key={i}>{item}</li>    
            ))}
        </ul>
    </div>
)}