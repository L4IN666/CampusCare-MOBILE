import { Ionicons } from "@expo/vector-icons";
import { Alert, Pressable, StyleSheet, Text, View } from "react-native";

// ========================================
// TYPE / INTERFACE
// Assessment: Type + Array of Objects
// ========================================

interface Report {
  id: number;
  title: string;
  location: string;
  description: string;
  status: "Menunggu" | "Diproses" | "Selesai";
  icon: keyof typeof Ionicons.glyphMap;
}

// ========================================
// ARRAY OF OBJECTS
// Assessment: Type + Array of Objects
// ========================================

const reports: Report[] = [
  {
    id: 1,
    title: "Lampu Kelas Mati",
    location: "Gedung Kuliah Bersama",
    description: "Lampu di kelas 101 tidak menyala",
    status: "Diproses",
    icon: "bulb-outline",
  },
  {
    id: 2,
    title: "Kursi Rusak",
    location: "Laboratorium Informatika",
    description: "Beberapa kursi di laboratorium rusak",
    status: "Menunggu",
    icon: "desktop-outline",
  },
  {
    id: 3,
    title: "Keran Air Rusak",
    location: "Gedung Teknik",
    description: "Keran air di toilet lantai 2 tidak berfungsi",
    status: "Selesai",
    icon: "water-outline",
  },
];

// ========================================
// CUSTOM FUNCTION
// Assessment: Custom Function
// ========================================

const getStatusColor = (status: Report["status"]) => {
  if (status === "Selesai") {
    return "#16a34a";
  }

  if (status === "Diproses") {
    return "#f59e0b";
  }

  return "#64748b";
};

const getStatusIcon = (status: Report["status"]) => {
  if (status === "Selesai") return "checkmark-circle";
  if (status === "Diproses") return "time";
  return "alert-circle";
};

// ========================================
// CUSTOM FUNCTION
// ========================================

const handleReportPress = (report: Report) => {
  Alert.alert(
    "Detail Laporan",
    `${report.title}\n\nLokasi: ${report.location}\nStatus: ${report.status}`,
  );
};

const handleAddReport = () => {
  Alert.alert("Buat Laporan", "Fitur pembuatan laporan akan segera dibuka.");
};

// ========================================
// MAIN COMPONENT
// ========================================

export default function Index() {
  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Halo, Mahasiswa 👋</Text>

          {/* INLINE STYLE */}
          <Text
            style={{
              fontSize: 14,
              color: "#64748b",
              marginTop: 4,
            }}
          >
            Laporkan fasilitas kampus yang bermasalah
          </Text>
        </View>

        <View style={styles.logo}>
          <Ionicons name="business-outline" size={26} color="#2563eb" />
        </View>
      </View>

      {/* TITLE */}
      <View style={styles.titleSection}>
        <Text style={styles.title}>CampusCare</Text>

        <Text style={styles.subtitle}>Sistem Pelaporan Fasilitas Kampus</Text>
      </View>

      {/* STATISTIC */}
      <View style={styles.statCard}>
        <View style={styles.statIcon}>
          <Ionicons name="document-text-outline" size={24} color="#2563eb" />
        </View>

        <View>
          <Text style={styles.statNumber}>{reports.length}</Text>

          <Text style={styles.statLabel}>Total Laporan</Text>
        </View>
      </View>

      {/* REPORT TITLE */}
      <Text style={styles.sectionTitle}>Laporan Terbaru</Text>

      {/* LOOP */}
      {/* Assessment: Loop menggunakan map() */}

      <View>
        {reports.map((report) => (
          <Pressable
            key={report.id}
            onPress={() => handleReportPress(report)}
            style={styles.reportCard}
          >
            {/* ICON */}
            <View style={styles.reportIcon}>
              <Ionicons name={report.icon} size={24} color="#2563eb" />
            </View>

            {/* CONTENT */}
            <View style={styles.reportContent}>
              {/* INLINE STYLE */}
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "bold",
                  color: "#1e293b",
                }}
              >
                {report.title}
              </Text>

              <Text style={styles.location}>{report.location}</Text>

              <View style={styles.statusRow}>
                <Ionicons
                  name={getStatusIcon(report.status)}
                  size={16}
                  color={getStatusColor(report.status)}
                />

                <Text
                  style={[
                    styles.statusText,
                    {
                      color: getStatusColor(report.status),
                      marginLeft: 5,
                    },
                  ]}
                >
                  {report.status}
                </Text>
              </View>
            </View>

            {/* ARROW */}
            <Ionicons name="chevron-forward" size={20} color="#415b5f" />
          </Pressable>
        ))}
      </View>

      {/* BUTTON */}

      <Pressable style={styles.addButton} onPress={handleAddReport}>
        <Ionicons name="add" size={22} color="white" />
        <Text style={styles.addButtonText}>Buat Laporan</Text>
      </Pressable>
    </View>
  );
}

// ========================================
// EXTERNAL STYLING
// Assessment: Inline + External Style
// ========================================

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fafc",
    padding: 24,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 28,
  },

  greeting: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#0f172a",
  },

  logo: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#fedddb",
    justifyContent: "center",
    alignItems: "center",
  },

  titleSection: {
    marginBottom: 24,
  },

  title: {
    fontSize: 46,
    textAlign: "center",
    fontWeight: "bold",
    color: "#2563eb",
  },

  subtitle: {
    fontSize: 14,
    textAlign: "center",
    color: "#64748b",
    marginTop: 4,
  },

  statCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#eff6ff",
    padding: 18,
    borderRadius: 16,
    marginBottom: 24,
  },

  statIcon: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: "#dbeafe",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
  },

  statNumber: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1e3a8a",
  },

  statLabel: {
    fontSize: 13,
    color: "#64748b",
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#0f172a",
    marginBottom: 12,
  },

  reportCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    padding: 16,
    borderRadius: 16,
    marginBottom: 12,

    // Shadow Android
    elevation: 2,
  },

  reportIcon: {
    width: 46,
    height: 46,
    borderRadius: 12,
    backgroundColor: "#eff6ff",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
  },

  reportContent: {
    flex: 1,
  },

  location: {
    fontSize: 13,
    color: "#64748b",
    marginTop: 4,
    marginBottom: 8,
  },

  statusRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 6,
  },

  statusText: {
    fontSize: 12,
    fontWeight: "600",
  },

  addButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2563eb",
    padding: 15,
    borderRadius: 14,
    marginTop: 8,
    gap: 8,
  },

  addButtonText: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  },
});
