import React, { useMemo } from 'react';
import { Image, StyleSheet, Text, View, Linking } from 'react-native';
import { Button } from './Button';

type CardProps = {
  title: string;
  description?: string;
  thumbnailUri?: string;
  imageUri?: string;
  button?: { title: string; callback: () => void }
}

export const Card: React.FC<CardProps> = ({ title, description, thumbnailUri, imageUri, button }) => {

  const source = useMemo(() => {
    return { uri: thumbnailUri }
  }, [thumbnailUri]);

  return (
    <View style={styles.container}>

      <View style={styles.mainSection}>
        {thumbnailUri &&
          <View style={styles.thumbnailContainer}>
            <Image source={source} style={styles.thumbnail}/>
          </View>
        }

        <View style={styles.header}>
          <Text style={styles.headerText}>{title}</Text>
          {description && <Text>{description}</Text>}
        </View>
      </View>

      {imageUri &&
        <View style={styles.imageSection}>
          <Image source={{ uri: imageUri }} style={styles.image}/>
        </View>
      }

      {button &&
        <View style={styles.buttonSection}>
          <Button
            title={button.title}
            onClick={button.callback}
          />
        </View>
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: '#ddd',
    borderLeftWidth: 1,
    borderRadius: 2,
    borderRightWidth: 1,
    borderTopWidth: 1,
    elevation: 2,
    marginHorizontal: 5,
    marginTop: 10,
    shadowColor: '#dc0808',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    backgroundColor: '#fff'
  },
  header: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'space-around',
  },
  headerText: {
    fontSize: 18,
  },
  image: {
    flex: 1,
    height: 300,
  },
  imageSection: {
    borderBottomWidth: 1,
    borderColor: '#ddd',
    padding: 5,
  },
  buttonSection: {
    borderBottomWidth: 1,
    borderColor: '#ddd',
    padding: 5,
  },
  mainSection: {
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
    position: 'relative',
  },
  thumbnail: {
    height: 80,
    width: 80
  },
  thumbnailContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10
  }
});

