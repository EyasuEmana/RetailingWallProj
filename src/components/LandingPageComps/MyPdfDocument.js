import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import BodyPart from "../../pages/LandingPage/BodyPart/index";
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

const MyPdfDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <BodyPart />
      </View>
    </Page>
  </Document>
);

export default MyPdfDocument;
