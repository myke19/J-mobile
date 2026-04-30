import { fetchPosts } from "@/api/api-client";
import { useEffect, useState } from "react";
import { ActivityIndicator, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Profile() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchPosts();
            setPosts(data);
        };
        fetchData();
    }, []);


    return (
        <SafeAreaView style={{ backgroundColor: "#fff", flex: 1}}>
        <ScrollView>
            <View>
                <Text>Welcome To The Tabs Profile Page</Text>
                <Text></Text>
            </View>
            <View>
                {posts.length === 0 ? ( 
                    <ActivityIndicator/> 
                ) : (
                        
                 <View>
                    {posts?.map((post:any, i) => {
                        return (

                 <View style={{ borderColor: 'red', padding: 10, margin: 10}}
                             key={i}>
                                <Text>Title: {post?.title}</Text>
                                <Text>Body: {post?.body}</Text>
                                <Text>Id: {post?.id}</Text>
                                    </View>
                        );
                        })}
                        </View>
                        )}
                        </View>
        </ScrollView>
        </SafeAreaView>
    );
}