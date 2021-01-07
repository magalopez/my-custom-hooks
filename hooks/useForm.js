import {useState} from 'react'

export const useForm = (initialState = {}) => {
  const [values, setvalues] = useState(initialState);

  const handlerInputChange = ({target}) => setvalues({...values, [target.name]: target.value});

  const resetInput = () => setvalues(initialState);

  return [values, handlerInputChange, resetInput]
}