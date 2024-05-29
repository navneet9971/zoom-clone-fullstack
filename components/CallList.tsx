'use client'

import { useGetCalls } from '@/hooks/useGetCalls'
import { useRouter } from 'next/navigation';


const CallList = ({ type }: { type: 'enden' |
    'upcoming' | 'recordings'
}) => {

    const { endedCalls, upcomingCalls, callRecordings, isLoading} = useGetCalls();

    const router = useRouter();
  return (
    <div>CallList</div>
  )
}

export default CallList