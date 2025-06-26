
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import Link from "next/link"



const Dashboard = () => {
    return (
        <div className="flex max-w-11/12 mx-auto flex-col gap-6">
            <h1 className="text-3xl font-bold  ">Welcome back Shakil Ahmed Billal, ready for your next lesson?</h1>
            <Tabs defaultValue="spanishEnglish">
                <TabsList>
                    <TabsTrigger value="spanishEnglish">Spanish English</TabsTrigger>
                    <TabsTrigger value="password">Online Classes</TabsTrigger>
                </TabsList>
                <TabsContent value="spanishEnglish">
                    <Card>
                        <div className="flex items-center gap-6">
                            <img
                                src="/image/PuroPuri-English-Shikhi-Package-Banner-2.png"
                                alt="avatar"
                                className="w-[35%] h-auto pl-5"
                            />
                            <div className="flex-1 space-y-4">
                                <CardHeader>
                                    <CardTitle className={"text-2xl font-bold"}>Spanish English</CardTitle>
                                    <CardDescription>
                                        This is a Spanish English course. You can learn both languages
                                        here.
                                    </CardDescription>
                                </CardHeader>
                                <CardFooter>
                                    <Link href="/course"><Button className="">Start Learning</Button></Link>
                                </CardFooter>
                            </div>
                        </div>
                    </Card>
                </TabsContent>
                <TabsContent value="password">
                    <Card>
                       
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    )
}

export default Dashboard
