import { fetchPostsData } from "@/api/axios-client";
import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Profile() {
  const [rawData, setRawData] = useState<any>();
    const [posts, setPosts] = useState<any>([]);
    const [page, setPage] = useState(1);

    const fetchMoreData = async () => {
      const skip = page * 30;
      const data = await fetchPostsData(skip);
      setPage((prev) => prev + 1);
      setRawData(data);
      setPosts((prev:any) => [...prev, ...data?.posts]);
    };

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchPostsData(0);
            setRawData(data);
            setPosts(data?.posts);
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
         {/*}  <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => (
          <View style={styles.item}>
            <Text style={styles.title}>{item}</Text>
          </View>
        )}
        renderSectionHeader={({section: {title}}) => (
          <Text style={styles.header}>{title}</Text>
        )}
      />*/}
            <View>
                {posts.length === 0 ? ( 
                    <ActivityIndicator/> 
                ) : (
                        
                 <View>
          <FlatList
            onEndReachedThreshold={0.5}
            onEndReached={fetchMoreData}
            numColumns={2}
            data={posts}
      keyExtractor={( item, i) => i.toString()}
      renderItem={({ item }: any) => (
        <View style={{padding: 20, maxWidth: "50%"}}>
          <Text>Id:{item?.id}</Text>
            <Text>Title: {item?.title}</Text>
            <Text>Body:{item?.body}</Text>
            </View>
      )}
    />
         {/*{posts?.map((post:any, i) => {
           return (
            <View style={{ borderColor: 'red', padding: 10, margin: 10}}
                key={i}>
                <Text>Title: {post?.title}</Text>
                <Text>Body: {post?.body}</Text>
                 <Text>Id: {post?.id}</Text>
                   </View>
                 );
                   })} */}
                      
                      
                  </View>
                )}
            </View>
        </ScrollView>
        </SafeAreaView>
    );
}

{/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
  },
});*/}
