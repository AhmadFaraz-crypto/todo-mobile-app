import React, {useState} from 'react';
import {Container} from 'native-base';
import {TouchableOpacity, View, Image} from 'react-native';
import CheckBox from 'react-native-check-box';
import {SwipeListView} from 'react-native-swipe-list-view';
import Modal from 'react-native-modal';

// components
import {Header, Footer, Text, Button} from 'src/components';
import {Layout, Gutters, Global, Images} from 'src/theme';

// styles
import styles from './styles';

const Task = props => {
  const [checked, setChecked] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const {
    fill,
    row,
    center,
    alignItemsEnd,
    alignItemsCenter,
    justifyContentCenter,
    justifyContentBetween,
    selfCenter,
  } = Layout;
  const {primaryBg} = Global;
  const {
    regularLPadding,
    mediumTPadding,
    regularLMargin,
    regularVPadding,
    tiny5xHPadding,
    tiny5xHMargin,
    regularTMargin,
    smallLMargin,
  } = Gutters;
  const {
    wrapper,
    bgWrapper,
    heading,
    headingText,
    subHeadingText,
    delIcon,
    checkIcon,
    modal,
    title,
    description,
    subtext,
    alarmIcon,
  } = styles;
  const incomplete = [
    {
      heading: 'Submit my resume',
      subHeading: 'Today, 17.00',
    },
    {
      heading: 'Meeting with Jack',
      subHeading: '24 Feb, 15.00',
    },
  ];

  const incompleteItem = (item, i) => (
    <View key={i} style={[row, regularTMargin]}>
      <CheckBox
        onClick={() => setChecked(!checked)}
        isChecked={checked}
        unCheckedImage={<Image source={Images.uncheckIcon} style={checkIcon} />}
        checkedImage={<Image source={Images.checkIcon} style={checkIcon} />}
      />
      <View>
        <Text
          color="senary"
          text={item.heading}
          font="Medium"
          style={[headingText, regularLMargin]}
        />
      </View>
    </View>
  );

  return (
    <>
      <Container style={primaryBg}>
        <Header title="Task" />
        <View style={regularLPadding}>
          <TouchableOpacity>
            <Text
              text="+ Add new task"
              color="quinary"
              font="Bold"
              style={[heading, mediumTPadding]}
            />
          </TouchableOpacity>
          <Text
            text="Incomplete"
            color="quinary"
            font="Bold"
            style={[heading, mediumTPadding]}
          />
          <View>
            <SwipeListView
              data={incomplete}
              renderItem={({item}) => (
                <View style={[fill, row, wrapper]}>
                  <View style={[row, regularVPadding]}>
                    <CheckBox
                      onClick={() => setChecked(!checked)}
                      isChecked={checked}
                      unCheckedImage={
                        <Image source={Images.uncheckIcon} style={checkIcon} />
                      }
                      checkedImage={
                        <Image source={Images.checkIcon} style={checkIcon} />
                      }
                    />
                    <View>
                      <Text
                        color="quinary"
                        text={item.heading}
                        font="Medium"
                        style={[regularLMargin, headingText]}
                      />
                      <View style={[row, alignItemsCenter, regularLPadding]}>
                        <Image source={Images.alarm} style={alarmIcon} />
                        <Text
                          color="senary"
                          text={`${item.subHeading}`}
                          font="Medium"
                          style={subHeadingText}
                        />
                      </View>
                    </View>
                  </View>
                </View>
              )}
              renderHiddenItem={(data, rowMap) => (
                <View style={[fill, row, justifyContentBetween]}>
                  <View style={[fill, center]} />
                  <TouchableOpacity
                    onPress={() => setOpenModal(true)}
                    style={[
                      fill,
                      justifyContentCenter,
                      alignItemsEnd,
                      bgWrapper,
                    ]}>
                    <Image source={Images.delIcon} style={delIcon} />
                  </TouchableOpacity>
                </View>
              )}
              rightOpenValue={-75}
              leftOpenValue={0}
            />
          </View>
        </View>
        <Text
          text="Completed"
          color="quinary"
          font="Bold"
          style={[heading, tiny5xHMargin, mediumTPadding]}
        />
        <View style={tiny5xHPadding}>
          {incomplete.map((screen, i) => incompleteItem(screen, i))}
        </View>
      </Container>
      <Modal isVisible={openModal} animationIn="zoomIn" animationOut="zoomOut">
        <View style={selfCenter}>
          <View style={modal}>
            <Text
              text="Reminder"
              font="SemiBold"
              style={title}
              color="quaternary"
              center
            />
            <Text
              text="Consequat velit qui adipisicing sunt do reprehenderit ad laborum tempor ullamco exercitation. Ullamco tempor adipisicing et voluptate duis sit esse aliqua esse ex dolore esse. Consequat velit qui adipisicing sunt."
              font="Medium"
              style={[regularTMargin, description]}
              color="octonary"
              center
            />
            <View style={row}>
              <Button
                text="Remind me again"
                color="primary"
                style={[fill, center, regularTMargin]}
                onPress={() => setOpenModal(false)}
              />
            </View>
            <Text
              text="Skip"
              center
              color="quaternary"
              font="ExtraBold"
              style={subtext}
            />
          </View>
        </View>
      </Modal>
      <Footer activeRoute="Task" navigation={props.navigation} />
    </>
  );
};

export default Task;
