export class LikeButton extends React.Component {
    constructor() {
        super();

        this.state = {
            isLiked: false,
            count: 3
        }
    }

    gererLeClick = () => {
        this.setState({
            isLiked: !this.state.isLiked,
            count: this.state.isLiked ? this.state.count - 1 : this.state.count + 1
        })
    }

    render() {
        return <div>
            <span className="counter">{this.state.count}</span>
            <button className="like" onClick={this.gererLeClick}>
                {this.state.isLiked ? "Je n'aime plus" : "J'aime"}
            </button>
        </div>
    }
}