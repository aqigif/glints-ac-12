import React from 'react';
import {View, Text, Button} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

const Home = () => {
  // const dataReducer = store.getState();
  // const {user, company} = dataReducer;

  const dataReducer = useSelector(state => {
    return state;
  });
  const dispatch = useDispatch();
  const {user, company} = dataReducer;
  return (
    <View style={{flex: 1}}>
      <Text style={{marginTop: 40}}>"Home"</Text>
      <Text style={{marginTop: 40, fontSize: 40}}>{user.name}</Text>
      <Text style={{fontSize: 40}}>{user.city}</Text>
      <Text style={{fontSize: 40}}>{company.name}</Text>
      <Button
        title={'Ganti Nama'}
        onPress={() => {
          const name = user.name === 'Gifari' ? 'Aqil' : 'Gifari';
          dispatch({
            type: 'CHANGE_NAME',
            name: name,
          });
        }}
      />
    </View>
  );
};

export default Home;
