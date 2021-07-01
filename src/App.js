import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import './index.css';
import List from './List.js';

const App = () => {

    const [input, setinput] = useState();
    const [Listitem, setItem] = useState([]);

    const onchange_input = (event) => {
        setinput(event.target.value);
    }

    const onclick_btn = () => {
        setItem((oldItem) => {
            return ([...oldItem, input]);
        });
        setinput("");
    }

    const DeleteItem = (id) => {

        setItem((oldItem) => {
            return oldItem.filter((array, index) => {
                return (index != id);
            });
        });
    }
    return (
        <>
            <h1 className="main_head">ToDo List React App</h1>
            <div className="inner_div">
                <div className="center_div">
                    <h1 className="app_head">ToDo List</h1>
                    <input type="text" value={input} placeholder="Add an Item" onChange={onchange_input} className="input" />
                    <Button onClick={onclick_btn} className="btn" style={{ borderRadius: "70px" }}><AddIcon /></Button>
                    <ol className="oder_list">
                        {Listitem.map((ItemVal, index) => {
                            return (<List
                                text={ItemVal}
                                id={index}
                                key={index}
                                item_del={DeleteItem} />);
                        })}
                    </ol>
                </div>
            </div>
        </>
    );
}

export default App;