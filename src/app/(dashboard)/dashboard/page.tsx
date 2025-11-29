import { authOptions } from "@/lib/auth";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
// import RecentTasks from '@/components/dashboard/RecentTasks';
// import ProjectsList from '@/components/dashboard/ProjectsList';
import { getMongoDBService } from "@/lib/mongodb";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);
  const db = await getMongoDBService();
  // @ts-ignore
  const userId = new ObjectId(session!.user.id);

  // Fetch dashboard data
  // const [tasksCount, projectsCount, completedTasks, recentTasks] =
  //   await Promise.all([
  //     db.collection("tasks").countDocuments({ userId }),
  //     db.collection("projects").countDocuments({ userId }),
  //     db.collection("tasks").countDocuments({ userId, status: "done" }),
  //     db
  //       .collection("tasks")
  //       .find({ userId })
  //       .sort({ createdAt: -1 })
  //       .limit(5)
  //       .toArray(),
  //   ]);

  // const stats = {
  //   totalTasks: tasksCount,
  //   totalProjects: projectsCount,
  //   completedTasks,
  //   completionRate:
  //     tasksCount > 0 ? Math.round((completedTasks / tasksCount) * 100) : 0,
  // };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <p className="text-muted-foreground">
          Welcome back! Here's what's happening with your tasks.
        </p>
      </div>

      {/* <StatsCards stats={stats} /> */}

      <div className="grid gap-6 md:grid-cols-2">
        {/* <RecentTasks tasks={recentTasks} /> */}
        {/* <ProjectsList userId={userId.toString()} /> */}
      </div>
    </div>
  );
}
