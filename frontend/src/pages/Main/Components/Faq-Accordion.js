import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Fade from '@mui/material/Fade';

export default function AccordionTransition() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpansion = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <div>
      <Accordion
        expanded={expanded}
        onChange={handleExpansion}
        slots={{ transition: Fade }}
        slotProps={{ transition: { timeout: 400 } }}
        sx={{
          '& .MuiAccordion-region': { height: expanded ? 'auto' : 0 },
          '& .MuiAccordionDetails-root': { display: expanded ? 'block' : 'none' },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>What is Arthamarga?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Arthamarga is a platform dedicated to enhancing financial literacy among people in India. It connects users through community discussions, links them to financial professionals, offers financial news, games, calculators for loans and investments, and tools for tracking expenses and income. We also focus on promoting women in finance by providing free professional guidance.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>Is there a fee to use Arthamarga?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Basic membership is free, which includes access to community discussions, financial news, and basic calculators. Some advanced tools and professional guidance services will require a subscription.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography>How do community discussions work on Arthamarga?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Community discussions allow users to post questions, share insights, and engage with others on various financial topics. Simply go to the "Community" section, choose a discussion thread or start a new one.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4-content"
          id="panel4-header"
        >
          <Typography>What special services does Arthamarga offer to women in finance?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          We provide free professional guidance to women seeking to enhance their financial literacy or pursue careers in finance. This includes mentorship, webinars, and personalized advice.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

