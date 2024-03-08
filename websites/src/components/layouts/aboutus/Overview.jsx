import React, { Component } from 'react';
class Overview extends Component {
	constructor(props) {
        super(props);
        this.state = {
            content: [
                {
                    id: 1,
					text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices luctus ante. Quisque eget erat et nisi accumsan ultricies sit amet at purus. Praesent arcu risus, auctor id augue imperdiet, auctor faucibus mauris. In sed bibendum turpis. Praesent arcu elit, convallis nec tempor eu, varius ut erat. Integer accumsan turpis sed lorem tincidunt, quis euismod orci semper. Nunc iaculis fermentum tortor quis imperdiet. Proin efficitur consequat egestas. Curabitur tempus erat quis luctus fermentum. Nullam quis ante luctus, maximus lectus eu, luctus nibh.',
                },
                {
                    id: 2,
					text: 'Vivamus non ligula gravida metus porta imperdiet quis sit amet nisl. Duis eget luctus urna, a pulvinar velit. Nulla rhoncus nisi velit, eu tempus massa euismod sit amet. Mauris mollis nisl in arcu fringilla pretium. Nunc accumsan eu erat quis commodo. Ut eu viverra tortor. Quisque rutrum rhoncus nisi, fringilla tempus nibh porta a. Phasellus tincidunt auctor odio, quis convallis leo facilisis et.',
                },
                {
                    id: 3,
					text: 'Morbi vitae bibendum mi. Phasellus commodo est ut magna tristique, ut mattis felis eleifend. Nulla viverra quam eget risus rutrum, non bibendum turpis sagittis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin cursus sem at rhoncus convallis. Donec porta, mauris in vehicula vestibulum, metus magna accumsan nunc, ut porta nibh lorem et nunc. Suspendisse maximus est a pellentesque sollicitudin. Donec id nulla nisi. Suspendisse dapibus id tellus in pretium. Suspendisse efficitur ligula elit, id cursus nunc pulvinar eu.',
				},
            ],
            listbox: [
                {
                    id: 1,
                    text: 'Work fewer hours - and make more money'
                },
                {
                    id: 2,
                    text: 'Attract and retain quality, high customers'
                },
                {
                    id: 3,
                    text: 'Manage your time so get more done in less time'
                },
                {
                    id: 4,
                    text: 'Hone sharp leadership skills to manage'
                },
                {
                    id: 5,
                    text: 'Cut expenses without sacrificing quality'
                },
                {
                    id: 6,
                    text: 'Sed ut perspiciatis unde omnis iste natus error sit'
                },
            ],
            content2: [
                {
                    id: 1,
                    class: 'v1',
					text: 'Curabitur mollis nisl vel fermentum dapibus. Morbi placerat mi vitae libero fringilla, et pretium orci cursus. Fusce dignissim finibus nunc, vel rhoncus felis porttitor id. Nunc justo dui, eleifend a nisl quis, consequat vestibulum tellus. Proin id velit vel sapien pharetra feugiat ac sit amet ante. Ut vehicula ornare nisl. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas egestas odio in mauris laoreet vestibulum ac in odio.',
                },
                {
                    id: 2,
                    class: 'style',
					text: 'Praesent vel est nisl. Nullam gravida orci eu scelerisque ornare. Quisque quis enim blandit, elementum neque ac, semper velit. In dapibus faucibus consequat. Praesent sed urna magna. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent pulvinar eleifend varius. Nunc ullamcorper elit id quam feugiat vulputate. In rhoncus velit pretium odio efficitur viverra. Donec venenatis metus quis ante accumsan porttitor.',
                },
            ],
        }
    }
    render() {
        return (
			
			    <div className="post-overview">
                    <div className="thumb">
                        <img src="images/overview/1.jpg" alt="f&o" />
                    </div>
                    <div className="content">
                        <h4 className="title">We are help you to grow your business</h4>
                        {
                            this.state.content.map(data=> (
                                <p key={data.id}> {data.text}</p>
                            ))
                        }
                    </div>
                    <div className="post post-list">
                        <div className="box">
                            <h4 className="title">Our smart approach</h4>
                            <p className="title-top">Our renowned coaching programs will allow you to:</p>
                            <div className="list">
                                {
                                    this.state.listbox.map(data=>(
                                        <p key={data.id}>{data.text}</p>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="box v1">
                            <div className="flat-video-fancybox">
                                <img src="images/video/2.jpg" alt="f&o" />
                                <a className="fancybox" data-type="iframe" href="https://www.youtube.com/embed/2Ge1GGitzLw?autoplay=1"> 
                                    <div className="overlay-inner">
                                        <i className="fa fa-play"></i>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="content v2">
                        <h4 className="title">A Global Organization</h4>
                        {
                            this.state.content2.map(data=>(
                                <p key={data.id} className={data.class} >{data.text}</p>
                            ))
                        }
                    </div>
                </div>
                                
        );
    }
}

export default Overview;