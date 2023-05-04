import React, { Component } from 'react';
import { Link } from 'react-router-dom'
class SingleBlogComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datablog: [
                {
                    id: 1,
                    srcimg: 'images/blog/single/1.jpg',
                    title: "Responsive layout",
                    time: '15 November 2020 ...',
                    author: 'By admin ...',
                    category: 'In WordPress',
                    comments: '9',
                    like: '1',
                }
            ],
            listcontent: [
                {
                    id: 1,
                    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into.",
                },
                {
                    id: 2,
                    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
                },
                {
                    id: 3,
                    text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessita tibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias.",
                },
            ],
            tags: [
                {
                    id:1 ,
                    tag: 'wordpress,'
                },
                {
                    id:2 ,
                    tag: 'joomla,'
                },
                {
                    id:3 ,
                    tag: 'prestashop,'
                },
                {
                    id:4 ,
                    tag: 'drupal'
                }
            ],
            social: [
                {
                    id:1 ,
                    class: 'facebook,',
                    classicon: 'fa fa-facebook-f'
                },
                {
                    id:2 ,
                    class: 'twitter',
                    classicon: 'fa fa-twitch'
                },
                {
                    id:3 ,
                    class: 'google',
                    classicon: 'fa fa-google-plus'
                },
                {
                    id:4 ,
                    class: 'linkedIn',
                    classicon: 'fa-linkedin'
                }
            ],
            comments: [
                {
                    id: 1,
                    srcimg: 'images/blog/single/2.jpg',
                    author: 'Daniel Shaw',
                    time: 'Dec 2 2020',
                    text: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati '
                },
                {
                    id: 2,
                    srcimg: 'images/blog/single/3.jpg',
                    author: 'MD Robiul',
                    time: 'july 15, 2020 at 2:39 am',
                    text: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati '
                }
            ]
        }
    }
render() {
    return (
        <div className="post-wrap single-v1 clearfix">
            <article className="entry clearfix">
                {
                    this.state.datablog.map(data=>(
                        <div key={data.id} className="entry-border">
                            <div className="feature-post">
                                <Link to="#"><img src={data.srcimg} alt="f&o" /></Link>
                            </div>
                            <div className="content-post">
                                <div className="entry-meta">
                                    <ul className="meta-post clearfix">
                                        <li className="day">
                                            <Link to="#">{data.title}</Link>
                                        </li>
                                        <li className="author">
                                            <Link to="#">{data.author}</Link>
                                        </li>
                                        <li className="travel">
                                            <Link to="#">{data.category}</Link>
                                        </li>
                                    </ul>

                                    <div className="entry-meta-right">
                                        <span className="like"><Link to="#">{data.like}</Link></span>
                                        <span className="comment"><Link to="#">{data.comments}</Link></span>
                                    </div>
                                </div>
                                <h4 className="title-post">
                                    <Link to="#">{data.title}</Link>
                                </h4>
                                <div className="entry-post">
                                    {
                                        this.state.listcontent.map(data=>(
                                            <p key={data.id}>{data.text}</p>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>                
                    ))
                }
                <div className="wrap-share">
                    <ul className="category-post">
                        <li className="style">Tags : </li> 
                        {
                            this.state.tags.map(data=>(
                                <li key={data.id} ><Link to="#"> {data.tag}</Link></li> 
                            ))
                        }
                    </ul>

                    <div className="share-post">                               
                        <ul className="flat-socials">
                            <li className="style v1">Share: </li>
                            {
                                this.state.social.map(data=>(
                                    <li key={data.id} className={data.class}><Link to="#"><i className={data.classicon}></i></Link></li>
                                ))
                            }
                        </ul>
                    </div>    
                </div>

                <div className="comment-post">
                    <div className="comment-list-wrap">
                        <h4 className="title comment-title">Comments</h4>
                        <ul className="comment-list">
                            {
                                this.state.comments.map(data=>(
                                    <li key={data.id}>
                                        <article className="comment v1">
                                            <div className="comment-avatar">
                                                <img src={data.srcimg} alt="f&o" />
                                            </div>                  
                                            <div className="comment-detail">
                                                <div className="comment-meta">
                                                    <p className="comment-author"><Link to="#">{data.author}</Link></p> 
                                                    <p className="comment-date"><Link to="#">{data.time}</Link></p>
                                                    <span className="line"></span>
                                                    <Link to="#" className="comment-reply">reply</Link>
                                                </div>

                                                <p className="comment-body">{data.text}</p>
                                            </div>
                                        </article>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                    <div id="respond" className="comment-respond">
                        <h4 className="title comment-title style1">Leave Reply</h4>
                        <form className="comment-form">
                            <p className="comment-notes">Your email address will not be published. Required fields are marked *</p>
                            <p className="comment-form-comment">
                                <label>Comment</label> 
                                <textarea id="comment" name="comment" required="required"></textarea>
                            </p>
                            <p className="comment-form-author">
                                <label>Name *</label>
                                <input id="author" name="author" type="text" required="required" />
                            </p>
                            <p className="comment-form-email">
                                <label>Email *</label>
                                <input id="email" name="email" type="email" required="required" />
                            </p>
                            <p className="comment-form-url">
                                <label>Website</label>
                                <input id="url" name="url" type="text" />
                            </p>
                            <p className="form-submit">
                                <input name="submit" type="submit" id="submit" className="submit" value="Post Comment" />
                            </p>
                        </form>
                    </div>
                </div>
            </article>
        </div>
                            
        );
    }
}

export default SingleBlogComponent;