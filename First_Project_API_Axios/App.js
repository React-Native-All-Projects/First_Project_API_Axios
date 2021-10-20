import React from 'react';
import { View,Text, Button } from 'react-native';
import axios from 'react-native-axios';

  //------------------------------------------------------------------------Get ***********************************
  const Get = async () =>{
      await axios.get('http://9c5c-46-248-205-213.ngrok.io/api/TestAPI/Get').then((res)=>{
        console.log('Get');
        console.log(res.data);
      },error =>{
        console.log(error.message)
      });
  }
  Get();

  const GetWithURL = async (data) =>{
    await axios.get('http://9c5c-46-248-205-213.ngrok.io/api/TestAPI/GetWithURL/'+data).then((res)=>{
    console.log('GetWithURL');
    console.log(res.data);
    },error =>{
        console.log(error.message)
    });
  }
  GetWithURL('Hello');



  //------------------------------------------------------------------------Post
    const Post = async () =>{
    await axios.post('http://9c5c-46-248-205-213.ngrok.io/api/TestAPI/Post').then((res)=>{
    console.log('Post');
    console.log(res.data);
    },error =>{
        console.log(error.message)
    });
  }
  Post();

  const PostWithBody = async (body) =>{
    await axios.post('http://9c5c-46-248-205-213.ngrok.io/api/TestAPI/PostWithBody',body).then((res)=>{
    console.log('PostWithBody');
    console.log(res.data);
    },error =>{
        console.log(error.message)
    });
  }
  var body = {
    UserName : 'Tahaluf',
    Password : 'TahalufPass'
  }
  PostWithBody(body);
  


  //------------------------------------------------------------------------Put
  const Put = async () =>{
    await axios.put('http://9c5c-46-248-205-213.ngrok.io/api/TestAPI/Put').then((res)=>{
    console.log('Put');
    console.log(res.data);
    },error =>{
        console.log(error.message)
    });
  }
  Put();

  const PutWithBody = async (body) =>{
    await axios.put('http://9c5c-46-248-205-213.ngrok.io/api/TestAPI/PutWithBody',body).then((res)=>{
    console.log('PutWithBody');
    console.log(res.data);
    },error =>{
        console.log(error.message)
    });
  }
  var body = {
    UserName : 'Tahaluf',
    Password : 'TahalufPass'
  }
  PutWithBody(body);



  //------------------------------------------------------------------------Delete
  const DeleteWithURL = async (Id) =>{
    await axios.delete('http://9c5c-46-248-205-213.ngrok.io/api/TestAPI/DeleteWithURL/'+Id).then((res)=>{
    console.log('DeleteWithURL');
    console.log(res.data);
    },error =>{
        console.log(error.message)
    });
  }
  DeleteWithURL(10);



const App = () =>{
  return (
    <View style ={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text>Welcome To Axios</Text>
      <Button
      title = 'Print'
      onPress = {()=>{
        var body = {
          UserName : 'Tahaluf',
          Password : 'TahalufPass'
        }

        Get();
        GetWithURL('Welcome');
        Post();
        PostWithBody(body);
        Put();
        PutWithBody(body);
        DeleteWithURL(1);
      }}
      />
    </View>
  )
}


export default App;
