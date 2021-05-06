import SongList from './components/SongList';
import SongDetail from './components/SongDetail';

const App = () => {
    return (
    <div>
        <div className='left'>
        <SongList />
        </div>
        <div className='right'>
        <SongDetail />
        </div>
    </div>
    );
}

export default App;