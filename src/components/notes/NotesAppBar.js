import React from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { startSaveNote } from '../../actions/notes';

const NotesAppBar = () => {
  const dispatch = useDispatch();
  const { active: note } = useSelector((state) => state.notes);
  const handleSaveNote = () => {
    dispatch(startSaveNote(note));
  }
  return (
    <div className='notes__appbar'>
        <span>
            20 de agosto de 2020
        </span>
        <div>
            <button className='btn'> Picture</button>
            <button className='btn' onClick={handleSaveNote}> Save</button>

        </div>
    </div>
  )
}

export default NotesAppBar