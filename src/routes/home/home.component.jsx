import './home.style.scss'
import searchIcon from '../../assets/search.svg'
import {useEffect, useRef, useState} from "react";
import Select from 'react-select';
import BlogCard from "../../component/blogCard/blogCard.component";
import blogs from '../../blogs.json'
import BlogSubscribeCard from "../../component/blogSubscribeCard/blogSubscribeCard.component";

const Home = () => {
    const [searchValue, setSearchValue] = useState('')
    const [sortingTabsSelected, setSortingTabsSelected] = useState('View all')
    const [sortingDropdownSelected, setSortingDropdownSelected] = useState('Name')
    const [filteredBlogs, setFilteredBlogs] = useState([])
    const onInputChange = (event) => {
        setSearchValue(event.target.value)
    }

    const firstSorting = blogs.sort((a, b) => {
        if (a.title > b.title) {
            return 1;
        }
        if (a.title < b.title) {
            return -1;
        }
    })

    useEffect(() => {
        const newFilteredBlogs = firstSorting.filter((blog) => {
            return blog.title.toLowerCase().includes(searchValue.toLowerCase())
        })
        const sorted = newFilteredBlogs.sort((a, b) => {
            if (sortingDropdownSelected === 'Name') {
                if (a.title > b.title) {
                    return 1;
                }
                if (a.title < b.title) {
                    return -1;
                }

            } else {
                if (a.creation_day < b.creation_day) {
                    return 1
                }
                if (a.creation_day > b.creation_day) {
                    return -1
                }

            }
            return 0
        })
        if (sortingTabsSelected === 'View all') {
            setFilteredBlogs(sorted)
            return
        }
        const twiceFiltered = sorted.filter((blog) => {
            return blog.tag.toLowerCase() === sortingTabsSelected.toLowerCase()
        })
        setFilteredBlogs(twiceFiltered)
    }, [searchValue, sortingTabsSelected, sortingDropdownSelected])


    const sortingTabsSelectHandler = (e) => {
        setSortingTabsSelected(e.target.innerText)
    }

    const sortingDropdownSelectHandler = (e) => {
        const sortingValue = e.value
        setSortingDropdownSelected(sortingValue)
    }

    const subscribeButtonHandler = (e) => {
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
                            <div onClick={sortingTabsSelectHandler}
                                 style={sortingTabsSelected === 'View all' ? {borderBottom: '2px solid #7F56D9'} : {borderBottom: 'none'}}>
                                View all
                            </div>
                            <div onClick={sortingTabsSelectHandler}
                                 style={sortingTabsSelected === 'Design' ? {borderBottom: '2px solid #7F56D9'} : {borderBottom: 'none'}}>
                                Design
                            </div>
                            <div onClick={sortingTabsSelectHandler}
                                 style={sortingTabsSelected === 'Product' ? {borderBottom: '2px solid #7F56D9'} : {borderBottom: 'none'}}>
                                Product
                            </div>
                            <div onClick={sortingTabsSelectHandler}
                                 style={sortingTabsSelected === 'Software Engineering' ? {borderBottom: '2px solid #7F56D9'} : {borderBottom: 'none'}}>
                                Software Engineering
                            </div>
                            <div onClick={sortingTabsSelectHandler}
                                 style={sortingTabsSelected === 'Customer Success' ? {borderBottom: '2px solid #7F56D9'} : {borderBottom: 'none'}}>
                                Customer Success
                            </div>
                        </div>
                        <div className='sorting-dropdown'>
                            <Select
                                placeholder={sortingDropdownSelected}
                                options={[
                                    {label: 'Name', value: 'Name'},
                                    {label: 'Most recent', value: 'Most recent'}
                                    ]}
                                onChange={sortingDropdownSelectHandler}
                                className='sorting-dropdown-selector'
                            />
                        </div>
                    </div>
                    <div className='content'>
                        {filteredBlogs.map((blog) => {
                            return <BlogCard img={blog.image} title={blog.title} annotation={blog.annotation}
                                             tag={blog.tag} author_last_name={blog.author_last_name}
                                             author_first_name={blog.author_first_name} date={blog.creation_day}/>
                        })}
                        <BlogSubscribeCard onButtonPress={subscribeButtonHandler}/>
                    </div>
                    <div className='pagination'>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home