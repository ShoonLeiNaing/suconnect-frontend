import { useState } from "react";
import dynamic from "next/dynamic";
import { navigation } from "../../data/navigationData";

const Layout = dynamic(import("../../components/Layout"), { ssr: false });
const StepperComponent = dynamic(import("../../components/Stepper/Stepper"), {
  ssr: false,
});
const SelectAccountsForm = dynamic(
  import("../../components/AnnouncementCreateForm/SelectAccountsForm"),
  { ssr: false }
);
const ChooseCampusForm = dynamic(
  import("../../components/AnnouncementCreateForm/ChooseCampusForm"),
  {
    ssr: false,
  }
);
const ConfirmationDialog = dynamic(
  import("../../components/Dialog/ConfirmationDialog"),
  {
    ssr: false,
  }
);

const AnnouncementDetailForm = dynamic(
  import("../../components/AnnouncementCreateForm/AnnouncementDetailForm"),
  { ssr: false }
);

const AnnouncementCreate = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [open, setOpen] = useState(false);
  const [selectedValues, setSelectedValues] = useState<any>([]);

  const handleNext = () => {
    if (activeStep < 2) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const createAnnouncementHandler = () => {
    if (selectedValues.includes("Email")) {
      setOpen(true);
    }
  };

  const steps = [
    {
      title: "Announcement Details",
      component: (
        <AnnouncementDetailForm
          {...{
            handleNext,
          }}
        />
      ),
    },
    {
      title: "Select Accounts",
      component: (
        <SelectAccountsForm
          {...{
            handleNext,
            handleBack,
          }}
        />
      ),
    },
    {
      title: "Choose Platforms",
      component: (
        <ChooseCampusForm
          {...{
            handleNext: createAnnouncementHandler,
            handleBack,
            selectedValues,
            setSelectedValues,
          }}
        />
      ),
    },
  ];

  return (
    <Layout showSideNav={false} hiddenFooter data={navigation}>
      <StepperComponent
        {...{
          steps,
          activeStep,
          setActiveStep,
          width: "400px",
          marginY: "20px",
        }}
      />
      <ConfirmationDialog
        {...{
          open,
          setOpen,
          type: "warning",
          btnLabel: "Send",
          handleClose,
          dialogTitle: "Are you sure you want to send 100 mails?",
          dialogBody:
            "You have selected 100 accounts to send announcement via email.",
        }}
      />
    </Layout>
  );
};

export default AnnouncementCreate;
