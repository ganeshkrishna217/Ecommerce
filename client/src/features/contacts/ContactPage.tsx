import { Divider, Typography } from "@mui/material";

function ContactPage() {
  return (
    <>
      <div>
        <Typography variant="h1" sx={{ ml: 4 }}>
          We're Here
        </Typography>
        <Typography variant="h6" sx={{ ml: 4 }}>
          Our door is always open for a good cup of coffee.
        </Typography>
        <Divider />
      </div>
      <div>
        <Typography variant="h2" sx={{ ml: 4, mt: 4 }}>
          Get in touch
        </Typography>
        <Typography variant="h6" sx={{ ml: 4 }}>
          Any FAQs? Want to get in touch? We'd love to hear from you. Here's how
          you can reach us...
        </Typography>
        <Divider />
        <Typography variant="h6" sx={{ p: 4 }}>
          We value your feedback and inquiries! Our dedicated customer support
          team is here to assist you with any questions or concerns you may
          have. You can reach us via email at BKG_Store-india@gmail.com for
          prompt assistance. If you prefer to speak with someone directly, feel
          free to call our customer care at +1 (555) 123-4567. Our
          representatives are available Monday through Friday from 9 AM to 6 PM
          to provide you with the best support possible. We strive to respond to
          all inquiries within 24 hours. Thank you for choosing us, and we look
          forward to serving you!
        </Typography>
      </div>
    </>
  );
}
export default ContactPage;
