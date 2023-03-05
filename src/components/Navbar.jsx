import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <ul>
      <li><Link to={'/lensa/cembung'}>Lensa Cembung</Link></li>
      <li><Link to={'/lensa/cekung'}>Lensa Cekung</Link></li>
      <li><Link to={'/cermin/cekung'}>Cermin Cekung</Link></li>
      <li><Link to={'/cermin/cembung'}>Cermin Cembung</Link></li>
    </ul>
  );
}