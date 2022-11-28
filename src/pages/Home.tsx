import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
  return (
    <div>
        <h2>HOME</h2>
        <button onClick={() => navigate('/detail')}>Go to Details</button>
    </div>
  )
}

export default Home