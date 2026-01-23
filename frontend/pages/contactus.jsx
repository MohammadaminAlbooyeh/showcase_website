import * as React from 'react';
import { 
	Box, 
	TextField, 
	Button, 
	Typography, 
	Alert, 
	CircularProgress, 
	Container, 
	Grid, 
	Paper,
	Stack,
	IconButton,
	alpha 
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import SendIcon from '@mui/icons-material/Send';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const MotionPaper = motion(Paper);
const MotionBox = motion(Box);

export default function ContactUs() {
	const [form, setForm] = React.useState({ 
		name: '', 
		email: '', 
		subject: '',
		message: '' 
	});
	const [errors, setErrors] = React.useState({});
	const [success, setSuccess] = React.useState(false);
	const [loading, setLoading] = React.useState(false);

	const validate = () => {
		const errs = {};
		if (!form.name.trim()) errs.name = 'Name is required';
		if (!form.email.trim()) errs.email = 'Email is required';
		else if (!/^\S+@\S+\.\S+$/.test(form.email)) errs.email = 'Invalid email';
		if (!form.subject.trim()) errs.subject = 'Subject is required';
		if (!form.message.trim()) errs.message = 'Message is required';
		return errs;
	};

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
		setErrors({ ...errors, [e.target.name]: undefined });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const errs = validate();
		
		if (Object.keys(errs).length) {
			setErrors(errs);
			return;
		}

		setLoading(true);
		setErrors({});

		try {
			const res = await fetch('http://localhost:8000/api/contact/', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(form),
			});
			
			if (res.ok) {
				setSuccess(true);
				setForm({ name: '', email: '', subject: '', message: '' });
				setTimeout(() => setSuccess(false), 5000);
			} else {
				setErrors({ general: 'Failed to send message. Please try again.' });
			}
		} catch (error) {
			setErrors({ general: 'Network error. Please try again later.' });
		} finally {
			setLoading(false);
		}
	};

	const contactInfo = [
		{ icon: <EmailIcon />, label: 'Email', value: 'hello@amin.dev', color: '#3b82f6' },
		{ icon: <LocationOnIcon />, label: 'Location', value: 'Turin, Italy', color: '#ef4444' },
		{ icon: <LinkedInIcon />, label: 'LinkedIn', value: 'Coming soon...', color: '#0077b5' },
		{ icon: <GitHubIcon />, label: 'GitHub', value: 'Coming soon...', color: '#ffffff' },
	];

	const socials = [
		{ icon: <GitHubIcon />, link: '#' },
		{ icon: <LinkedInIcon />, link: '#' },
		{ icon: <TwitterIcon />, link: '#' },
	];

	return (
		<Box sx={{ 
			py: { xs: 8, md: 12 }, 
			minHeight: '100vh',
			background: 'radial-gradient(circle at 50% 100%, rgba(245, 158, 11, 0.05) 0%, transparent 50%)',
		}}>
			<Container maxWidth="lg">
				<Grid container spacing={8}>
					{/* Left Side: Info */}
					<Grid item xs={12} md={5}>
						<MotionBox
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6 }}
						>
							<Typography variant="h2" sx={{ fontWeight: 800, mb: 2, background: 'linear-gradient(to right, #f59e0b, #d97706)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
								Let's Connect
							</Typography>
							<Typography variant="h6" sx={{ color: 'text.secondary', mb: 6, fontWeight: 400, lineHeight: 1.6 }}>
								I’m always open to discussing new projects, creative ideas or opportunities to be part of your visions.
							</Typography>

							<Stack spacing={4} sx={{ mb: 6 }}>
								{contactInfo.map((info, i) => (
									<Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
										<Box sx={{ 
											width: 50, 
											height: 50, 
											borderRadius: '12px', 
											display: 'flex', 
											alignItems: 'center', 
											justifyContent: 'center',
											background: alpha(info.color, 0.1),
											color: info.color
										}}>
											{info.icon}
										</Box>
										<Box>
											<Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', mb: 0.5 }}>
												{info.label}
											</Typography>
											<Typography variant="body1" sx={{ fontWeight: 600 }}>
												{info.value}
											</Typography>
										</Box>
									</Box>
								))}
							</Stack>

							<Box>
								<Typography variant="subtitle2" sx={{ mb: 2, color: 'text.secondary', textTransform: 'uppercase', letterSpacing: 1 }}>
									Follow Me
								</Typography>
								<Stack direction="row" spacing={2}>
									{socials.map((social, i) => (
										<IconButton 
											key={i}
											component="a"
											href={social.link}
											sx={{ 
												background: 'rgba(255, 255, 255, 0.03)',
												border: '1px solid rgba(255, 255, 255, 0.05)',
												transition: 'all 0.3s ease',
												'&:hover': {
													background: alpha('#f59e0b', 0.1),
													borderColor: '#f59e0b',
													color: '#f59e0b',
													transform: 'translateY(-3px)'
												}
											}}
										>
											{social.icon}
										</IconButton>
									))}
								</Stack>
							</Box>
						</MotionBox>
					</Grid>

					{/* Right Side: Form */}
					<Grid item xs={12} md={7}>
						<MotionPaper
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.2 }}
							elevation={0}
							sx={{
								p: { xs: 4, md: 6 },
								borderRadius: 6,
								background: 'rgba(30, 41, 59, 0.4)',
								backdropFilter: 'blur(12px)',
								border: '1px solid rgba(255, 255, 255, 0.05)',
							}}
						>
							<AnimatePresence mode="wait">
								{success ? (
									<MotionBox
										key="success"
										initial={{ opacity: 0, scale: 0.9 }}
										animate={{ opacity: 1, scale: 1 }}
										exit={{ opacity: 0, scale: 0.9 }}
										sx={{ textAlign: 'center', py: 4 }}
									>
										<CheckCircleIcon sx={{ fontSize: 80, color: '#10b981', mb: 3 }} />
										<Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>Awesome!</Typography>
										<Typography variant="body1" sx={{ color: 'text.secondary', mb: 4 }}>
											Your message has been sent successfully. I'll get back to you shortly.
										</Typography>
										<Button 
											onClick={() => setSuccess(false)}
											variant="outlined" 
											sx={{ borderColor: 'rgba(255,255,255,0.1)', color: 'text.primary' }}
										>
											Send another message
										</Button>
									</MotionBox>
								) : (
									<form key="form" onSubmit={handleSubmit}>
										<Grid container spacing={3}>
											<Grid item xs={12} sm={6}>
												<TextField
													fullWidth
													label="Full Name"
													name="name"
													value={form.name}
													onChange={handleChange}
													error={!!errors.name}
													helperText={errors.name}
													variant="filled"
													sx={fieldStyles}
												/>
											</Grid>
											<Grid item xs={12} sm={6}>
												<TextField
													fullWidth
													label="Email Address"
													name="email"
													value={form.email}
													onChange={handleChange}
													error={!!errors.email}
													helperText={errors.email}
													variant="filled"
													sx={fieldStyles}
												/>
											</Grid>
											<Grid item xs={12}>
												<TextField
													fullWidth
													label="Subject"
													name="subject"
													value={form.subject}
													onChange={handleChange}
													error={!!errors.subject}
													helperText={errors.subject}
													variant="filled"
													sx={fieldStyles}
												/>
											</Grid>
											<Grid item xs={12}>
												<TextField
													fullWidth
													multiline
													rows={4}
													label="Message"
													name="message"
													value={form.message}
													onChange={handleChange}
													error={!!errors.message}
													helperText={errors.message}
													variant="filled"
													sx={fieldStyles}
												/>
											</Grid>
											<Grid item xs={12}>
												{errors.general && (
													<Alert severity="error" sx={{ mb: 3, borderRadius: 2 }}>
														{errors.general}
													</Alert>
												)}
												<Button
													fullWidth
													type="submit"
													disabled={loading}
													variant="contained"
													endIcon={loading ? <CircularProgress size={20} /> : <SendIcon />}
													sx={{
														py: 2,
														background: '#f59e0b',
														color: '#000',
														fontWeight: 700,
														fontSize: '1rem',
														borderRadius: 2,
														'&:hover': {
															background: '#d97706',
															transform: 'translateY(-2px)',
															boxShadow: '0 10px 20px -10px rgba(245, 158, 11, 0.5)'
														}
													}}
												>
													{loading ? 'Sending...' : 'Send Message'}
												</Button>
											</Grid>
										</Grid>
									</form>
								)}
							</AnimatePresence>
						</MotionPaper>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
}

const fieldStyles = {
	'& .MuiFilledInput-root': {
		backgroundColor: 'rgba(255, 255, 255, 0.03)',
		borderRadius: 2,
		border: '1px solid rgba(255, 255, 255, 0.05)',
		transition: 'all 0.3s ease',
		'&:before, &:after': { display: 'none' },
		'&:hover': {
			backgroundColor: 'rgba(255, 255, 255, 0.05)',
		},
		'&.Mui-focused': {
			backgroundColor: 'rgba(255, 255, 255, 0.05)',
			borderColor: '#f59e0b',
		}
	},
	'& .MuiInputLabel-root': {
		color: 'rgba(255, 255, 255, 0.4)',
		'&.Mui-focused': {
			color: '#f59e0b',
		}
	}
};
