import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBlogDetails} from '../actions/blogActions'
import Loader from '../components/Loader'
import { Row, Col } from 'react-bootstrap'
import BlogCard from '../components/BlogCard'
import Message from '../components/Message'


const BlogScreen = () => {
    const dispatch = useDispatch()

    const blogDetails = useSelector(state => state.blogDetails)
    const { loading, blogs, error} = blogDetails 

    useEffect(() => {
        dispatch(getBlogDetails())
    }, [dispatch])


    return (
        <>
        { loading ? <Loader/> : error ? <Message variant='danger'>{error}</Message>: (
            <Row>
                {blogs.map(blog => (
                    <Col key={blog._id} sm={12} md={6} lg={3}>
                        <BlogCard blog={blog}/>
                    </Col>
                ))}
            </Row>
        )}
        </>
    )
}

export default BlogScreen
