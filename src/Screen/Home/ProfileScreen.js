import React from 'react';
import {View, Text, Button} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

const Profile = () => {
  // const dataReducer = store.getState();
  // const {user, company} = dataReducer;

  const dataReducer = useSelector(state => {
    return state;
  });
  const dispatch = useDispatch();
  const {user, company} = dataReducer;
  return (
    <View style={{flex: 1}}>
      <Text style={{marginTop: 40}}>"Profile"</Text>
      {/* <Text style={{marginTop: 40, fontSize: 40}}>{user.name}</Text>
      <Text style={{fontSize: 40}}>{user.city}</Text>
      <Text style={{fontSize: 40}}>{company.name}</Text> */}
      <View style={{marginVertical: 10}}>
        {user.names.map((item, index) => (
          <Text key={index} style={{fontSize: 20}}>
            {item}
          </Text>
        ))}
      </View>
      {/* <Text style={{fontSize: 40}}>{user?.today?.day}</Text> */}
      <Button
        title={'Tambah'}
        onPress={() => {
          dispatch({
            type: 'CHANGE_NAME',
            // today: 'Jumat',
            names: user.names,
          });
        }}
      />
    </View>
  );
};

export default Profile;
