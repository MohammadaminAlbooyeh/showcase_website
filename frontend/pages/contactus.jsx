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
	Snackbar,
	alpha 
} from '@mui/material';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import SendIcon from '@mui/icons-material/Send';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const MotionPaper = motion(Paper);
const MotionBox = motion(Box);

// --- 3D Tilt Component ---
const TiltCard = ({ children, color }) => {
	const x = useMotionValue(0);
	const y = useMotionValue(0);

	const mouseXSpring = useSpring(x);
	const mouseYSpring = useSpring(y);

	const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
	const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

	const handleMouseMove = (e) => {
		const rect = e.currentTarget.getBoundingClientRect();
		const width = rect.width;
		const height = rect.height;
		const mouseX = e.clientX - rect.left;
		const mouseY = e.clientY - rect.top;
		x.set(mouseX / width - 0.5);
		y.set(mouseY / height - 0.5);
	};

	const handleMouseLeave = () => {
		x.set(0);
		y.set(0);
	};

	return (
		<motion.div
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
			style={{
				rotateX,
				rotateY,
				transformStyle: "preserve-3d",
			}}
		>
			{children}
		</motion.div>
	);
};

// --- Magnetic Button Component ---
const MagneticButton = ({ children, ...props }) => {
	const x = useMotionValue(0);
	const y = useMotionValue(0);
	const springConfig = { damping: 20, stiffness: 150 };
	const springX = useSpring(x, springConfig);
	const springY = useSpring(y, springConfig);

	const handleMouseMove = (e) => {
		const { clientX, clientY, currentTarget } = e;
		const { left, top, width, height } = currentTarget.getBoundingClientRect();
		const centerX = left + width / 2;
		const centerY = top + height / 2;
		x.set(clientX - centerX);
		y.set(clientY - centerY);
	};

	const handleMouseLeave = () => {
		x.set(0);
		y.set(0);
	};

	return (
		<motion.div
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
			style={{ x: springX, y: springY }}
		>
			{children}
		</motion.div>
	);
};

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
	const [openToast, setOpenToast] = React.useState(false);

	// Mouse movement for background mesh
	const bgX = useMotionValue(0);
	const bgY = useMotionValue(0);
	const bgSpringX = useSpring(bgX, { damping: 50 });
	const bgSpringY = useSpring(bgY, { damping: 50 });

	const xPx = useTransform(bgSpringX, (val) => `${val}px`);
	const yPx = useTransform(bgSpringY, (val) => `${val}px`);

	React.useEffect(() => {
		const handleGlobalMouseMove = (e) => {
			bgX.set(e.clientX);
			bgY.set(e.clientY);
		};
		window.addEventListener('mousemove', handleGlobalMouseMove);
		return () => window.removeEventListener('mousemove', handleGlobalMouseMove);
	}, [bgX, bgY]);

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

	const handleCopy = (text) => {
		navigator.clipboard.writeText(text);
		setOpenToast(true);
	};

	const contactInfo = [
		{ icon: <EmailIcon />, label: 'Email', value: 'hello@amin.dev', color: '#60a5fa', copyable: true },
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
			background: '#0a0a0a',
			position: 'relative',
			overflow: 'hidden'
		}}>
			{/* Dynamic Mesh Gradient Background */}
			<MotionBox
				style={{
					position: 'absolute',
					top: 0,
					left: 0,
					right: 0,
					bottom: 0,
					zIndex: 0,
					background: `radial-gradient(circle at var(--x) var(--y), rgba(59, 130, 246, 0.15) 0%, transparent 40%)`,
					'--x': xPx,
					'--y': yPx,
				}}
				sx={{
					pointerEvents: 'none',
				}}
			/>

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
				{/* Top Section: Header and Contact Cards */}
				<Box sx={{ mb: 10, textAlign: 'center' }}>
					<MotionBox
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
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
						<Typography variant="h6" sx={{ color: 'text.secondary', mb: 8, fontWeight: 400, lineHeight: 1.8, maxWidth: '800px', mx: 'auto' }}>
							Have a project in mind or just want to say hi? I'm always open to new opportunities and interesting conversations.
						</Typography>

						<Grid container spacing={3} justifyContent="center">
							{contactInfo.map((info, i) => (
								<Grid item xs={12} sm={6} md={3} key={i}>
									<TiltCard>
										<Box 
											onClick={info.copyable ? () => handleCopy(info.value) : undefined}
											sx={{ 
												display: 'flex', 
												alignItems: 'center', 
												gap: 1.5, 
												p: 2,
												borderRadius: 4,
												background: 'rgba(255, 255, 255, 0.03)',
												border: '1px solid rgba(255, 255, 255, 0.05)',
												cursor: info.copyable ? 'pointer' : 'default',
												transition: 'all 0.3s ease',
												height: '100%',
												'&:hover': {
													background: 'rgba(255, 255, 255, 0.06)',
													borderColor: `${info.color}40`,
													transform: 'translateZ(10px)'
												}
											}}
										>
											<Box sx={{ 
												width: 40, 
												height: 40, 
												borderRadius: '10px', 
												display: 'flex', 
												alignItems: 'center', 
												justifyContent: 'center',
												background: alpha(info.color, 0.1),
												color: info.color,
												flexShrink: 0
											}}>
												{React.cloneElement(info.icon, { sx: { fontSize: 20 } })}
											</Box>
											<Box sx={{ textAlign: 'left', overflow: 'hidden' }}>
												<Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', mb: 0, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 0.5, fontSize: '0.65rem' }}>
													{info.label}
												</Typography>
												<Typography variant="body2" sx={{ fontWeight: 600, color: '#fff', fontSize: '0.85rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
													{info.value}
												</Typography>
											</Box>
										</Box>
									</TiltCard>
								</Grid>
							))}
						</Grid>
					</MotionBox>
				</Box>

				{/* Bottom Section: Form */}
				<Grid container justifyContent="center">
					<Grid item xs={12} md={8} lg={7}>
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
										initial={{ opacity: 0, scale: 0.8 }}
										animate={{ opacity: 1, scale: 1 }}
										exit={{ opacity: 0 }}
										sx={{ textAlign: 'center', py: 8 }}
									>
										<motion.div
											initial={{ y: 0, x: 0 }}
											animate={{ y: -500, x: 500, opacity: 0 }}
											transition={{ duration: 1, ease: "easeIn" }}
											style={{ display: 'inline-block' }}
										>
											<SendIcon sx={{ fontSize: 100, color: '#3b82f6', mb: 4, transform: 'rotate(-45deg)' }} />
										</motion.div>
										
										<motion.div
											initial={{ opacity: 0, y: 20 }}
											animate={{ opacity: 1, y: 0 }}
											transition={{ delay: 0.5 }}
										>
											<CheckCircleIcon sx={{ fontSize: 80, color: '#4ade80', mb: 4 }} />
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
										</motion.div>
									</MotionBox>
								) : (
									<form key="form" onSubmit={handleSubmit}>
										<Typography variant="h5" sx={{ fontWeight: 700, mb: 4, textAlign: 'center' }}>Send a Message</Typography>
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
												<MagneticButton>
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
												</MagneticButton>
											</Grid>
										</Grid>
									</form>
								)}
							</AnimatePresence>
						</MotionPaper>
					</Grid>
				</Grid>
			</Container>

			<Snackbar
				open={openToast}
				autoHideDuration={3000}
				onClose={() => setOpenToast(false)}
				message="Email Copied to Clipboard!"
				anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
				sx={{
					'& .MuiSnackbarContent-root': {
						background: 'rgba(59, 130, 246, 0.9)',
						backdropFilter: 'blur(10px)',
						borderRadius: 3,
						fontWeight: 600,
						boxShadow: '0 8px 32px rgba(59, 130, 246, 0.4)',
					}
				}}
			/>
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
			borderColor: 'rgba(255, 255, 255, 0.2)',
		},
		'&.Mui-focused': {
			backgroundColor: 'rgba(255, 255, 255, 0.08)',
			borderColor: '#3b82f6',
			boxShadow: '0 0 0 4px rgba(59, 130, 246, 0.1)',
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
