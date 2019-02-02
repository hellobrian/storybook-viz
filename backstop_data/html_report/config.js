report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "../bitmaps_reference/backstop_storybook_Button_0_document_0_phone.png",
        "test": "../bitmaps_test/20190201-215138/backstop_storybook_Button_0_document_0_phone.png",
        "selector": "document",
        "fileName": "backstop_storybook_Button_0_document_0_phone.png",
        "label": "Button",
        "misMatchThreshold": 0.1,
        "url": "http://localhost:6006/iframe.html?selectedKind=Button&selectedStory=default",
        "expect": 0,
        "viewportLabel": "phone",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.00"
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/backstop_storybook_Button_0_document_1_tablet.png",
        "test": "../bitmaps_test/20190201-215138/backstop_storybook_Button_0_document_1_tablet.png",
        "selector": "document",
        "fileName": "backstop_storybook_Button_0_document_1_tablet.png",
        "label": "Button",
        "misMatchThreshold": 0.1,
        "url": "http://localhost:6006/iframe.html?selectedKind=Button&selectedStory=default",
        "expect": 0,
        "viewportLabel": "tablet",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.00"
        }
      },
      "status": "pass"
    }
  ],
  "id": "backstop_storybook"
});