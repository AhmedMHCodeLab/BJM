import React, { useState } from "react";
import { Box, Text, Button, Flex, Title } from "@mantine/core";
import { IconCloud, IconPenTool, IconDatabase } from "@tabler/icons-react";

const tabs = [
  {
    id: "tab1",
    icon: <IconCloud size={30} color="#0056D2" />,
    title: "Tab 1",
    subtitle: "Salepoint on first service",
    content: {
      heading: "Heading [Tab 1]",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.`,
      buttonText: "Button Text",
    },
  },
  {
    id: "tab2",
    icon: <IconPenTool size={30} color="gray" />,
    title: "Tab 2",
    subtitle: "Salepoint on first service",
    content: {
      heading: "Heading [Tab 2]",
      description: `This is the content for Tab 2. Update with specific information.`,
      buttonText: "Button Text",
    },
  },
  {
    id: "tab3",
    icon: <IconDatabase size={30} color="gray" />,
    title: "Tab 3",
    subtitle: "Salepoint on first service",
    content: {
      heading: "Heading [Tab 3]",
      description: `This is the content for Tab 3. Update with specific information.`,
      buttonText: "Button Text",
    },
  },
];

const Ourservices = () => {
  const [activeTab, setActiveTab] = useState("tab1"); // Track active tab

  return (
    <Box
      sx={{
        backgroundColor: "#f8f9fa",
        padding: "40px",
        borderRadius: "8px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      }}
    >
      <Flex direction="row" gap="lg">
        {/* Tabs List */}
        <Box sx={{ flex: "0 0 30%", maxWidth: "300px" }}>
          {tabs.map((tab) => (
            <Flex
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              align="center"
              gap="md"
              sx={{
                padding: "20px",
                border: `2px solid ${activeTab === tab.id ? "#0056D2" : "transparent"}`,
                borderRadius: "8px",
                cursor: "pointer",
                backgroundColor: activeTab === tab.id ? "white" : "#f8f9fa",
                boxShadow: activeTab === tab.id ? "0 0 10px rgba(0, 0, 0, 0.1)" : "none",
                transition: "all 0.3s",
                color: activeTab === tab.id ? "#0056D2" : "gray",
              }}
            >
              <Box>{tab.icon}</Box>
              <Box>
                <Text weight={600} size="md">
                  {tab.title}
                </Text>
                <Text size="sm" color="gray">
                  {tab.subtitle}
                </Text>
              </Box>
            </Flex>
          ))}
        </Box>

        {/* Active Tab Content */}
        <Box sx={{ flex: 1, padding: "20px", backgroundColor: "white", borderRadius: "8px" }}>
          {tabs.map(
            (tab) =>
              activeTab === tab.id && (
                <Box key={tab.id}>
                  <Title order={3} sx={{ color: "#0056D2", marginBottom: "20px" }}>
                    {tab.content.heading}
                  </Title>
                  <Text sx={{ marginBottom: "20px", color: "#6c757d" }}>
                    {tab.content.description}
                  </Text>
                  <Button variant="outline" color="blue">
                    {tab.content.buttonText}
                  </Button>
                </Box>
              )
          )}
        </Box>
      </Flex>
    </Box>
  );
};

export default Ourservices;
