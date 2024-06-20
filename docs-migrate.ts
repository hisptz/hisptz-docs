import {execSync} from "child_process";
import fs from "fs-extra";
import {apps, libs, MigrationConfig} from "./config/apps"


const migrateDocs = ({
												 repo,
												 branch = 'master',
												 tempDir,
												 targetDir,
												 extraFiles = [],
												 postDownloadActions = [],
												 docsDir = 'docs'
										 }: MigrationConfig) => {
		try {
				// Remove any previous copy
				fs.removeSync(tempDir)

				// Clone the repository and switch to the specified branch
				execSync(
						`git clone --depth 1 --sparse ${repo} --branch ${branch} ${tempDir}`
				)

				// Navigate to the cloned repository
				process.chdir(tempDir)

				// Set up sparse checkout to retrieve only the 'docs' directory
				execSync('git sparse-checkout init')
				execSync('git sparse-checkout set docs')

				postDownloadActions.forEach((action) => {
						console.log(`executing post download action: ${action}`)
						execSync(action)
				})

				process.chdir('..')

				// Remove any previous copy
				console.log(`removing previous copy at ${targetDir}`)
				fs.removeSync(targetDir)

				// Copy the directory to another place and create missing directories
				console.log(`copy files to ${targetDir}`)
				fs.copySync(`${tempDir}/${docsDir}`, targetDir, {})

				// Copy extra files
				extraFiles.forEach((file) => {
						console.log(`copying ${file.from} to ${file.to}`)
						fs.copySync(`${tempDir}/${file.from}`, `${targetDir}/${file.to}`, {})
				})

				// Remove the checked out code
				console.log(`removing temp directory ${tempDir}`)
				fs.removeSync(tempDir)
		} catch (error) {
				console.error(error)
		}
}


[...apps, ...libs].forEach((app) => {
		migrateDocs(app.migrationConfig);
});





