import React from 'react';

const List = (props) => {
    return (
        <>
            <div className="List_div">
                <i class="fas fa-times-circle" onClick={() => {
                    props.item_del(props.id);
                }}></i>
                <li>{props.text}</li>
            </div>
        </>
    );
}

export default List;