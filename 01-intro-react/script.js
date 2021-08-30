
const container = document.querySelector('.like');

class LikeButton extends React.Component {
    constructor() {
        super();

        this.state = {
            isLiked: false,
            count: 12
        }

    }

    gererLeClick = () => {
        this.setState({
            isLiked: !this.state.isLiked,
            count: this.state.isLiked ? this.state.count - 1 : this.state.count + 1
        })
    }

    render() {
        // return React.createElement('div', {}, [
        //     React.createElement('span', {className: "counter"}, this.state.count),
        //     React.createElement('button', {className: 'like', onClick: this.gererLeClick}, this.state.isLiked === true ? "Je n'aime plus" : "J'aime")
        // ]);

        return <div>
            <span className="counter">{this.state.count}</span>
            <button className="like" onClick={this.gererLeClick}>
                {this.state.isLiked ? "Je n'aime plus" : "J'aime"}
            </button>
        </div>
    }
}

const button = React.createElement(LikeButton);

ReactDOM.render(button, container);
