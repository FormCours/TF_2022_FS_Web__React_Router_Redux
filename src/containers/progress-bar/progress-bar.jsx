import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { progressActionBegin } from '../../store/actions/progress-v3.action';

const ProgressBar = ({val}) => {
  
  const {start, current, end} = useSelector(state => state.progress);
  const dispatch = useDispatch();

  const progressValue = ((current - start) / (end-start)) * 100;

  useEffect(() => {
    dispatch(progressActionBegin(val))
  }, []);

  return (
    <p>Progression : {progressValue.toLocaleString(undefined, { maximumFractionDigits: 2 })} %</p>
  )
};

export default ProgressBar;