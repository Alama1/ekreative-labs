import './home.style.scss'
import searchIcon from '../../assets/search.svg'
import {useState} from "react";
import Select from 'react-select';

const Home = () => {
    const [searchValue, setSearchValue] = useState('')
    const [sortingTabsSelected, setSortingTabsSelected] = useState('View all')
    const [sortingDropdownSelected, setSortingDropdownSelected] = useState('Most recent')
    const onInputChange = (event) => {
        setSearchValue(event.target.value)
        console.log(searchValue)
    }

    const onSortingTabsSelect = (e) => {
        setSortingTabsSelected(e.target.innerText)
    }

    const onSortingDropdownSelect = (e) => {
        console.log(e)
    }

    return (
        <div className='home'>
            <div className='home-header'>
                <div className='container'>
                    <div className='content'>
                        <div className='heading-text'>
                            <div className='title'>
                                <div className='top-text'>
                                    Our blog
                                </div>
                                <div className='bottom-text'>
                                    The latest writings from our team
                                </div>
                            </div>
                            <div className='text'>
                                The latest industry news, interviews, technologies, and resources.
                            </div>
                        </div>
                        <div className='search'>
                            <div className='input-with-label'>
                                <img src={searchIcon} className='search-icon'/>
                                <input className='input' placeholder='Search' onChange={onInputChange}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='home-blogs'>
                <div className='container'>
                    <div className='control-panel'>
                        <div className='sorting-tabs'>
                            <div onClick={onSortingTabsSelect} style={sortingTabsSelected === 'View all' ? {borderBottom: '2px solid #7F56D9'} : {borderBottom: 'none'}}>
                                View all
                            </div>
                            <div onClick={onSortingTabsSelect} style={sortingTabsSelected === 'Design' ? {borderBottom: '2px solid #7F56D9'} : {borderBottom: 'none'}}>
                                Design
                            </div>
                            <div onClick={onSortingTabsSelect} style={sortingTabsSelected === 'Product' ? {borderBottom: '2px solid #7F56D9'} : {borderBottom: 'none'}}>
                                Product
                            </div>
                            <div onClick={onSortingTabsSelect} style={sortingTabsSelected === 'Software Engineering' ? {borderBottom: '2px solid #7F56D9'} : {borderBottom: 'none'}}>
                                Software Engineering
                            </div>
                            <div onClick={onSortingTabsSelect} style={sortingTabsSelected === 'Customer Success' ? {borderBottom: '2px solid #7F56D9'} : {borderBottom: 'none'}}>
                                Customer Success
                            </div>
                        </div>
                        <div className='sorting-dropdown'>
                            <Select
                                placeholder={sortingDropdownSelected}
                                options={[
                                    { label: 'Most recent', value: 'Most recent'},
                                    { label: 'Name', value: 'Name'}]}
                                onChange={onSortingDropdownSelect}
                                className='sorting-dropdown-selector'
                            />
                        </div>
                    </div>
                    <div className='content'>

                    </div>
                    <div className='pagination'>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home