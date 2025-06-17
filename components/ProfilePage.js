import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import i18n from '../locales/i18n';


import { useEffect } from "react";

const ProfilePage = ({ toggleValue, SelectedLanguage, SizeFont }) => {
  useEffect(() => {
    const languageToUse = toggleValue ? SelectedLanguage : "en";
    i18n.changeLanguage(languageToUse);
  }, [toggleValue, SelectedLanguage]);

  const { t } = useTranslation();

  const [level, setlevel] = useState(0);

  useEffect(() => {
    setlevel(SizeFont - 3);
  }, [SizeFont]);
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={[styles.name, { fontSize: 26 + 2 * level }]}>
        {t("name")}
      </Text>
      <Text style={[styles.role, { fontSize: 16 + 2 * level }]}>
        {t("role")}
      </Text>
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { fontSize: 18 + 2 * level }]}>
          {t("about")}
        </Text>
        <Text style={[styles.sectionContent, { fontSize: 16 + 2 * level }]}>
          {t("about_content")}
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { fontSize: 18 + 2 * level }]}>
          {t("skills")}
        </Text>
        <Text style={[styles.sectionContent, { fontSize: 16 + 2 * level }]}>
          {t("skills_content")}
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { fontSize: 18 + 2 * level }]}>
          {t("contact")}
        </Text>
        <Text style={[styles.sectionContent, { fontSize: 16 + 2 * level }]}>
          📧 vineeta.caroline@example.com{"\n"}
          📱 +91 98765 43210
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f9f9f9",
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 100,
    marginBottom: 15,
  },
  name: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#333",
  },
  role: {
    fontSize: 16,
    color: "#666",
    marginBottom: 20,
  },
  section: {
    width: "100%",
    marginBottom: 15,
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 5,
    color: "#444",
  },
  sectionContent: {
    fontSize: 16,
    color: "#555",
  },
});

export default ProfilePage;
