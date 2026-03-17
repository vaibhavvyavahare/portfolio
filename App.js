import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Linking } from 'react-native';

export default function App() {
  const services = [
    { title: '🎨 UI/UX & Design', desc: 'Sleek, modern, and user-centric designs tailored to your brand.' },
    { title: '💻 Frontend Development', desc: 'Responsive and interactive web & mobile apps using React & React Native.' },
    { title: '⚙️ Backend Architecture', desc: 'Scalable APIs and robust databases built with Node.js, Python, or Go.' },
    { title: '🚀 Deployment & DevOps', desc: 'Seamless CI/CD pipelines, cloud hosting (AWS/Vercel/DigitalOcean), and infrastructure management.' },
  ];

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Header Section */}
        <View style={styles.header}>
          <Text style={styles.greeting}>Hi, I'm a</Text>
          <Text style={styles.title}>Full-Stack Developer</Text>
          <Text style={styles.subtitle}>Turning ideas into scalable digital products, from design to deployment. 💡</Text>

          <TouchableOpacity
            style={styles.ctaButton}
            activeOpacity={0.8}
            onPress={() => alert('Contact me at: your.email@example.com')}
          >
            <Text style={styles.ctaText}>Let's Build Something ✨</Text>
          </TouchableOpacity>
        </View>

        {/* Services Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>My Services</Text>
          <View style={styles.grid}>
            {services.map((service, index) => (
              <View key={index} style={styles.card}>
                <Text style={styles.cardTitle}>{service.title}</Text>
                <Text style={styles.cardDesc}>{service.desc}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>© 2026 Crafted with ❤️ using Universal App (Expo)</Text>
        </View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0a0a', // Deep dark backdrop
  },
  scrollContent: {
    padding: 24,
    paddingTop: 60,
    paddingBottom: 40,
    alignItems: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: 50,
    maxWidth: 600,
  },
  greeting: {
    fontSize: 20,
    color: '#60a5fa', // Blue accent
    fontWeight: '600',
    marginBottom: 8,
  },
  title: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 16,
    letterSpacing: -1,
  },
  subtitle: {
    fontSize: 18,
    color: '#9ca3af',
    textAlign: 'center',
    lineHeight: 28,
    marginBottom: 32,
  },
  ctaButton: {
    backgroundColor: '#3b82f6',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 999, // Pill shape
    shadowColor: '#3b82f6',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 16,
    elevation: 8,
  },
  ctaText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '700',
  },
  section: {
    width: '100%',
    maxWidth: 800,
    marginBottom: 40,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 24,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 16,
  },
  card: {
    backgroundColor: '#171717',
    padding: 24,
    borderRadius: 16,
    flexBasis: '100%',
    flexShrink: 1,
    borderWidth: 1,
    borderColor: '#262626',
    marginBottom: 16,
  },
  // Responsive pseudo-class logic is harder in bare React Native without hooks. 
  // For cross-platform simplicity we stack them, but typically we'd use useWindowDimensions() for true grid on Web.
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#f3f4f6',
    marginBottom: 12,
  },
  cardDesc: {
    fontSize: 15,
    color: '#a3a3a3',
    lineHeight: 24,
  },
  footer: {
    marginTop: 20,
    alignItems: 'center',
  },
  footerText: {
    color: '#525252',
    fontSize: 14,
  },
});
