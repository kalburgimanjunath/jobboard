import { useContext, useEffect } from 'react';
import fire from '../utils/firebase';
import { JobContext } from '../components/context/JobContext';
import Jobs from '../components/Jobs';

export default function Home() {
	const { jobs, setJobs } = useContext(JobContext);

	useEffect(() => {
		const db = fire.firestore();
		db.collection('jobs')
			.doc('jobsDocument')
			.onSnapshot((doc) => {
				const job = doc.data().allJobs;
				setJobs(job);
			});
	}, []);

	return (
		<>
			{(jobs.length > 0 && (
				<Jobs label="All the Developer Jobs" jobs={jobs} />
			)) || (
				<h2 style={{ textAlign: 'center', marginTop: '20px' }}>
					Loading...
				</h2>
			)}
		</>
	);
}
