import React, { Component } from 'react';
class CaseSingleV1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contentpost1: [
                {
                    id: 1,
                    class: 'title-post',
                    title: 'Challenge',
                    text: 'Sed ut perspiciatis unde omnis iste natus voluptatem accusantium dolo remque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veri tatis et quasi architecto beatae vitae dicta explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores',
                },
                {
                    id: 2,
                    class: 'list-post',
                    title: 'There are many variations of passages available',
                    text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.',
                },
                {
                    id: 3,
                    class: 'list-post v1',
                    title: 'Determine the right inventory level:',
                    text: 'With hundreds of medications in the market, Pharm Ltd. needed a proper method to predict and manage their inventory. Using a mean absolute percentage analysis, the teams appropriate levels for raw materials and finished products',
                },
            ],
            contentpost2: [
                {
                    id: 1,
                    class: 'title-post',
                    title: 'Solution',
                    text: 'Sed ut perspiciatis unde omnis iste natus voluptatem accusantium dolo remque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veri tatis et quasi architecto beatae vitae dicta explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.',
                },
            ],
            contentpost3: [
                {
                    id: 1,
                    class: 'title-post',
                    title: 'Results',
                    text: 'It is a long established fact that a reader will be distracted by the read able content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less',
                },
                {
                    id: 2,
                    class: 'list-post',
                    title: 'Reduced lead time by 43%',
                    text: '',
                },
                {
                    id: 3,
                    class: 'list-post',
                    title: 'Decreased variability by 50%',
                    text: '',
                },
                {
                    id: 4,
                    class: 'list-post',
                    title: 'Lowered the risk of back-order by 95%',
                    text: '',
                },
                {
                    id: 5,
                    class: 'list-post v2',
                    title: 'Increased stock for finished goods by 10%',
                    text: '',
                },
            ]
           
        }
    }
    render() {
        return (
            <section className="main-content bg-sidebar sidebar-left">
                <div className="container">
                    <div className="case-single v1">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="title-section style1">
                                    <h3 className="title">Developing a strategy</h3>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <div className="thumb-left">
                                    <div className="img-style1">
                                        <img src="images/portfolio/single/1.jpg" alt="f&o" />
                                    </div>
                                    <div className="img-style2">
                                        <img src="images/portfolio/single/2.jpg" alt="f&o" />
                                        <img src="images/portfolio/single/3.jpg" alt="f&o" />
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="post-case-single v1">
                                    <div className="content-post v1">
                                        {
                                            this.state.contentpost1.map(data =>(
                                                <div key={data.id} className={data.class}>
                                                    <h4 className="title">{data.title}</h4>
                                                    <p>{data.text}</p>
                                                </div>
                                            ))
                                        }                                                
                                    </div>

                                    <div className="content-post v2">
                                        {
                                            this.state.contentpost2.map(data=>(
                                                <div key={data.id} className={data.class}>
                                                    <h4 className="title">{data.title}</h4>
                                                    <p>{data.text}</p>
                                                </div>
                                            ))
                                        }
                                        
                                    </div>

                                    <div className="content-post v3">
                                        {
                                            this.state.contentpost3.map(data=>(
                                                <div key={data.id} className={data.class}>
                                                    <h4 className="title">{data.title}</h4>
                                                    <p>{data.text}</p>
                                                </div>
                                            ))
                                        }
                                        <div className="img-table">
                                            <img src="images/portfolio/single/4.png" alt="f&o" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default CaseSingleV1;