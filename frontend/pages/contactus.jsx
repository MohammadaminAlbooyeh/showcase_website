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
		{ icon: <EmailIcon />, label: 'Email', value: 'hello@amin.dev', color: '#60a5fa' },
		{ icon: <LocationOnIcon />, label: 'Location', value: 'Turin, Italy', color: '#60a5fa' },
		{ icon: <LinkedInIcon />, label: 'LinkedIn', value: 'linkedin.com/in/amin', color: '#60a5fa' },
		{ icon: <GitHubIcon />, label: 'GitHub', value: 'github.com/amin', color: '#60a5fa' },
	];

	const socials = [
		{ icon: <GitHubIcon />, link: 'https://github.com/MohammadaminAlbooyeh' },
		{ icon: <LinkedInIcon />, link: '#' },
		{ icon: <TwitterIcon />, link: '#' },
	];

	return (
		<Box sx={{ 
			py: { xs: 8, md: 15 }, 
			minHeight: '100vh',
			background: 'var(--color-bg)',
			position: 'relative',
			overflow: 'hidden'
		}}>
			{/* Decorative background element */}
			<Box sx={{
				position: 'absolute',
				top: '20%',
				right: '-10%',
				width: '500px',
				height: '500px',
				background: 'radial-gradient(circle, rgba(59, 130, 246, 0.05) 0%, transparent 70%)',
				zIndex: 0
			}} />

			<Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
				<Grid container spacing={8} alignItems="center">
					{/* Left Side: Info */}
					<Grid item xs={12} md={5}>
						<MotionBox
							initial={{ opacity: 0, x: -30 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6 }}
						>
							<Typography variant="h2" sx={{ 
								fontWeight: 900, 
								mb: 3, 
								background: 'linear-gradient(45deg, #fff 30%, #60a5fa 90%)',
								WebkitBackgroundClip: 'text',
								WebkitTextFillColor: 'transparent' 
							}}>
								Get in Touch
							</Typography>
							<Typography variant="h6" sx={{ color: 'text.secondary', mb: 8, fontWeight: 400, lineHeight: 1.8 }}>
								Have a project in mind or just want to say hi? I'm always open to new opportunities and interesting conversations.
							</Typography>

							<Stack 
								direction="row" 
								sx={{ 
									mb: 8, 
									flexWrap: 'wrap',
									gap: 4
								}}
							>
								{contactInfo.map((info, i) => (
									<Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 1.5, minWidth: 'fit-content' }}>
										<Box sx={{ 
											width: 42, 
											height: 42, 
											borderRadius: '10px', 
											display: 'flex', 
											alignItems: 'center', 
											justifyContent: 'center',
											background: 'rgba(255, 255, 255, 0.03)',
											border: '1px solid rgba(255, 255, 255, 0.05)',
											color: info.color,
											boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
										}}>
											{React.cloneElement(info.icon, { sx: { fontSize: 20 } })}
										</Box>
										<Box>
											<Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', mb: 0, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 0.5, fontSize: '0.65rem' }}>
												{info.label}
											</Typography>
											<Typography variant="body2" sx={{ fontWeight: 600, fontSize: '0.85rem', whiteSpace: 'nowrap' }}>
												{info.value}
											</Typography>
										</Box>
									</Box>
								))}
							</Stack>
						</MotionBox>
					</Grid>

					{/* Right Side: Form */}
					<Grid item xs={12} md={7}>
						<MotionPaper
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.2 }}
							elevation={0}
							sx={{
								p: { xs: 4, md: 6 },
								borderRadius: 8,
								background: 'rgba(30, 41, 59, 0.4)',
								backdropFilter: 'blur(20px)',
								border: '1px solid rgba(255, 255, 255, 0.08)',
								boxShadow: '0 20px 50px rgba(0,0,0,0.3)'
							}}
						>
							<AnimatePresence mode="wait">
								{success ? (
									<MotionBox
										key="success"
										initial={{ opacity: 0, scale: 0.9 }}
										animate={{ opacity: 1, scale: 1 }}
										exit={{ opacity: 0, scale: 0.9 }}
										sx={{ textAlign: 'center', py: 8 }}
									>
										<CheckCircleIcon sx={{ fontSize: 100, color: '#3b82f6', mb: 4 }} />
										<Typography variant="h3" sx={{ fontWeight: 800, mb: 2 }}>Sent!</Typography>
										<Typography variant="h6" sx={{ color: 'text.secondary', mb: 5 }}>
											Thanks for reaching out. I'll get back to you as soon as possible.
										</Typography>
										<Button 
											onClick={() => setSuccess(false)}
											variant="outlined" 
											sx={{ 
												px: 4, 
												py: 1.5, 
												borderRadius: 3, 
												borderColor: 'rgba(255,255,255,0.2)', 
												color: '#fff',
												'&:hover': { borderColor: '#60a5fa', color: '#60a5fa' }
											}}
										>
											Send another message
										</Button>
									</MotionBox>
								) : (
									<form key="form" onSubmit={handleSubmit}>
										<Typography variant="h5" sx={{ fontWeight: 700, mb: 4 }}>Send a Message</Typography>
										<Grid container spacing={3}>
											<Grid item xs={12} sm={6}>
												<TextField
													fullWidth
													label="Your Name"
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
													label="Your Email"
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
													label="How can I help you?"
													name="message"
													value={form.message}
													onChange={handleChange}
													error={!!errors.message}
													helperText={errors.message}
													variant="filled"
													sx={{
														...fieldStyles,
														'& .MuiFilledInput-root': {
															...fieldStyles['& .MuiFilledInput-root'],
															borderRadius: 4
														}
													}}
												/>
											</Grid>
											<Grid item xs={12}>
												{errors.general && (
													<Alert severity="error" sx={{ mb: 3, borderRadius: 3 }}>
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
														py: 2.5,
														background: 'linear-gradient(45deg, #3b82f6 30%, #2563eb 90%)',
														color: '#fff',
														fontWeight: 800,
														fontSize: '1.1rem',
														borderRadius: 4,
														textTransform: 'none',
														boxShadow: '0 10px 30px -10px rgba(37, 99, 235, 0.5)',
														transition: 'all 0.3s ease',
														'&:hover': {
															transform: 'translateY(-2px)',
															boxShadow: '0 15px 40px -10px rgba(37, 99, 235, 0.6)',
															background: 'linear-gradient(45deg, #2563eb 30%, #1d4ed8 90%)',
														},
														'&:disabled': {
															background: 'rgba(255,255,255,0.05)',
															color: 'rgba(255,255,255,0.3)'
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

			{/* Decorative elements */}
			<Box sx={{
				position: 'absolute',
				bottom: '-10%',
				left: '-10%',
				width: '600px',
				height: '600px',
				background: 'radial-gradient(circle, rgba(96, 165, 250, 0.05) 0%, transparent 70%)',
				zIndex: 0
			}} />
		</Box>
	);
}

const fieldStyles = {
	'& .MuiFilledInput-root': {
		backgroundColor: 'rgba(255, 255, 255, 0.03)',
		borderRadius: 3,
		border: '1px solid rgba(255, 255, 255, 0.08)',
		transition: 'all 0.3s ease',
		fontSize: '1.1rem',
		'&:before, &:after': { display: 'none' },
		'&:hover': {
			backgroundColor: 'rgba(255, 255, 255, 0.06)',
			borderColor: 'rgba(255, 255, 255, 0.15)',
		},
		'&.Mui-focused': {
			backgroundColor: 'rgba(255, 255, 255, 0.08)',
			borderColor: '#3b82f6',
		}
	},
	'& .MuiInputLabel-root': {
		color: 'rgba(255, 255, 255, 0.4)',
		fontSize: '1rem',
		'&.Mui-focused': {
			color: '#3b82f6',
		}
	},
	'& .MuiFormHelperText-root': {
		mx: 1,
		mt: 1
	}
};
