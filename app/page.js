import AddNewRecord from '@/components/AddNewRecord';
import AIInsights from '@/components/AIInsights';
import ExpenseStats from '@/components/ExpenseStats';
import Guest from '@/components/Home';
import RecordChart from '@/components/RecordChart';
import RecordHistory from '@/components/RecordHistory';
import { currentUser } from '@clerk/nextjs/server';
import MainContent from './components/UserContent';

export default async function HomePage() {
  return <Guest/>
}