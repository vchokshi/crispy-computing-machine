import React, { Component } from 'react';

class MainHistory extends Component {
    constructor(props) {
        super(props);
        this.state = {
           post: [
               {
                   id: 1,
                   class: 'post',
                   year: '1991',
                   title: 'Where all the things begin',
                   description1: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur.',
                   img1: 'images/history/2.jpg',
                   img2: 'images/history/3.jpg'
               },
               {
                    id: 2,
                    class: 'post v2',
                    year: '1997',
                    title: 'Opened second branch',
                    description1: 'Etiam quis interdum felis, at pellentesque metus. Morbi eget congue lectus. Donec eleifend ultricies urna et euismod. Sed consectetur tellus eget odio aliquet, vel vestibulum tellus sollicitudin. Morbi maximus metus eu eros tincidunt.',
                    description2: 'Nullam tempor, ipsum eget egestas viverra, velit augue fringilla arcu, et sollicitudin enim eros nec est. Suspendisse volutpat velit non porttitor placerat.',
                    img1: 'images/history/2.jpg',
                    img2: 'images/history/3.jpg'
                },
                {
                    id: 3,
                    class: 'post v3',
                    year: '2006',
                    title: 'Received very first award for best services',
                    description1: 'Donec accumsan auctor iaculis. Sed suscipit arcu ligula, at egestas magna molestie a. Proin ac ex maximus, ultrices justo eget, sodales orci. Aliquam egestas libero ac turpis pharetra, in vehicula lacus scelerisque. Vestibulum ut sem laoreet, feugiat tellus at, hendrerit arcu. Nunc lacus elit, faucibus ac laoreet sed, dapibus.',
                    img1: 'images/history/2.jpg',
                    img2: 'images/history/3.jpg'
                },
                {
                    id: 4,
                    class: 'post v2',
                    year: '2012',
                    title: '20th anniversary',
                    description1: 'Etiam quis interdum felis, at pellentesque metus. Morbi eget congue lectus. Donec eleifend ultricies urna et euismod. Sed consectetur tellus eget odio aliquet, vel vestibulum tellus sollicitudin. Morbi maximus metus eu eros tincidunt.',
                    description2: 'Nullam tempor, ipsum eget egestas viverra, velit augue fringilla arcu, et sollicitudin enim eros nec est. Suspendisse volutpat velit non porttitor placerat.',
                    img1: 'images/history/2.jpg',
                    img2: 'images/history/3.jpg'
                },
            ]
           
        }
    }
    render() {
        return (
            <div className="post-history">
                <div className="thumb">
                    <img src="images/history/1.jpg" alt="f&o" />
                </div>
                <div className="content">
                    <h4 className="title">Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC</h4>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam.</p>
                </div>
                {
                    this.state.post.map(data=>(
                        <div key={data.id} className={data.class}>
                            <div className="year-post">
                                <p>{data.year}</p>
                            </div>
                            <div className="text-post">
                                <h4 className="title">{data.title}</h4>
                                <p>{data.description1}</p>
                                <p>{data.description2}</p>
                                <div className="thumb">
                                    <img src={data.img1} alt="f&o" />
                                    <img src={data.img2} alt="f&o" />
                                </div>
                            </div>
                        </div>

                    ))
                }
            </div>
        )
                                
    }
}

export default MainHistory;