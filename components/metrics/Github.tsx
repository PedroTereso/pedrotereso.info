import useSWR from 'swr';

import fetcher from 'lib/fetcher';
import { GitHub } from 'lib/types';
import MetricCard from 'components/metrics/Card';

export default function GitHubCard() {
  const { data } = useSWR<GitHub>('/api/github', fetcher);

  const followers = Number(data?.followersCount);
  const link = 'https://github.com/TiagoPereira06';

  return (
    <MetricCard
      header='GitHub Followers'
      link={link}
      metric={followers}
      isCurrency={false}
    />
  );
}
