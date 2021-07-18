import { useState, createContext } from 'react';
import JobData from '../../data/jobs';

const JobContext = createContext();

const JobProvider = ({ children }) => {
	const [jobs, setJobs] = useState([]);
	const [individualJob, setIndividualJob] = useState('');
	const [userJobs, setUserJobs] = useState([]);

	return (
		<JobContext.Provider
			value={{
				jobs,
				setJobs,
				individualJob,
				setIndividualJob,
				userJobs,
				setUserJobs
			}}
		>
			{children}
		</JobContext.Provider>
	);
};

export { JobContext, JobProvider };
