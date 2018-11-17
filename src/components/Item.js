import React, { Component } from 'react';
class Item extends Component {
    render() {
        const { item } = this.props;
        const { index } = this.props;
        return (
            <tr>
                <td className='text-center'>{index + 1}</td>
                <td>{item.name}</td>
                <td className='text-center'>{this.showLevel(item.level)}</td>
                <td>
                    <button type='button' className='btn btn-warning'>Edit</button>
                    <button type='button' className='btn btn-danger'>Delete</button>
                </td>
            </tr>
        );
    }
    showLevel(level) {
        let elmlevel = <span className='label label-default'>Small</span>;
        if (level === 1) {
            elmlevel = <span className='label label-info'>Medium</span>;
        }
        else if (level === 2) {
            elmlevel = <span className='label label-danger'>Hight</span>;
        }
        return elmlevel;
    }
}

export default Item;